import chalk from 'chalk'
import debug, { type Debugger } from 'debug'

import { formatToLoggerTime } from '@/shared/utils/date-times'
import { getMappedCallSites } from '@/shared/utils/runtime'

type MessagePayload = App.ObjectType
type MessageOptions = {
  name?: string
  title: string
  content: string
  data?: App.MaybePromise<MessagePayload | null> | undefined
  style?: 'default' | 'inline' | undefined
}
type ErrorMessageOptions = Omit<MessageOptions, 'title'>
type TraceMessageOptions = Omit<MessageOptions, 'title' | 'data'>

type AppOutput = Debugger
type InternalOutput = (options: MessageOptions) => Promise<void>

interface ILogger {
  error: (options: ErrorMessageOptions) => void
  log: (options: MessageOptions) => void
  trace: (options: TraceMessageOptions) => void
  warn: (options: MessageOptions) => void
}

const createAppOutput = (
  namespace: string,
  ...subNamespaces: string[]
): AppOutput => {
  const appOutput = debug('app').extend(namespace)

  const subNamespace = subNamespaces.length
    ? subNamespaces.reduce((acc, cur) => `${cur}:${acc}`)
    : ''

  return subNamespace ? appOutput.extend(subNamespace) : appOutput
}

const createLoggerOutput = (appOutput: AppOutput): InternalOutput => {
  const output = async (options: MessageOptions) => {
    const name = chalk.bold.green(options.name ?? 'Unknown')
    const title = chalk.bold(options.title)
    const content = chalk.italic(options.content)
    const now = formatToLoggerTime(Date.now(), 'en-US')

    if (typeof options.data !== 'undefined') {
      const isInline = !!options.style && options.style === 'inline'

      const dataFormatter = isInline
        ? '%s | [%s] %s - %s\n=============================================\n%s'
        : '%s | [%s] %s - %s\n=============================================\n%O'

      const data =
        options.data instanceof Promise ? await options.data : options.data

      const payload = isInline
        ? chalk.blackBright(JSON.stringify(data, null, 2))
        : data

      appOutput(dataFormatter, now, name, title, content, payload)

      return
    }

    appOutput('%s | [%s] %s - %s', now, name, title, content)
  }

  return output
}

const createLoggerLevels = (output: InternalOutput) => {
  const error = (options: ErrorMessageOptions) => {
    void output({
      ...options,
      title: chalk.red('Error (!)'),
      content: chalk.redBright(options.content),
    })
  }

  const log = (options: MessageOptions) => {
    void output({
      ...options,
      title: chalk.yellow(options.title),
      content: chalk.white(options.content),
    })
  }

  const trace = (options: TraceMessageOptions) => {
    void output({
      ...options,
      title: chalk.magenta('Stack Trace (?)'),
      data: getMappedCallSites().slice(1),
    })
  }

  const warn = (options: MessageOptions) => {
    void output({
      ...options,
      title: chalk.hex('FFAA00')(options.title),
      content: chalk.white(options.content),
    })
  }

  return {
    error,
    log,
    trace,
    warn,
  }
}

const createLogger = (
  baseNamespace: string,
  ...subNamespaces: string[]
): ILogger => {
  const appOutput = createAppOutput(baseNamespace, ...subNamespaces)
  const internalOutput = createLoggerOutput(appOutput)
  const loggerLevels = createLoggerLevels(internalOutput)

  console.debug(`Logger created: %s`, chalk.yellow(appOutput.namespace))

  return {
    ...loggerLevels,
  }
}

export { createLogger }
export type { ILogger }
