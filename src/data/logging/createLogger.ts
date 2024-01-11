import chalk from 'chalk'
import debug from 'debug'

import { formatToLoggerTime } from '@/shared/utils/date-times'
import { getMappedCallSites } from '@/shared/utils/runtime'

const createAppOutput = (
  namespace: string,
  ...subNamespaces: string[]
): App.Infra.Logging.AppOutput => {
  const appOutput = debug('app').extend(namespace)

  const subNamespace = subNamespaces.length
    ? subNamespaces.reduce((acc, cur) => `${cur}:${acc}`)
    : ''

  return subNamespace ? appOutput.extend(subNamespace) : appOutput
}

const createLoggerOutput = (
  appOutput: App.Infra.Logging.AppOutput,
): App.Infra.Logging.InternalOutput => {
  const output = async (options: App.Infra.Logging.MessageOptions) => {
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

const createLoggerLevels = (output: App.Infra.Logging.InternalOutput) => {
  const error = (options: App.Infra.Logging.ErrorMessageOptions) => {
    void output({
      ...options,
      title: chalk.red('Error (!)'),
      content: chalk.redBright(options.content),
    })
  }

  const log = (options: App.Infra.Logging.MessageOptions) => {
    void output({
      ...options,
      title: chalk.yellow(options.title),
      content: chalk.white(options.content),
    })
  }

  const trace = (options: App.Infra.Logging.TraceMessageOptions) => {
    void output({
      ...options,
      title: chalk.magenta('Stack Trace (?)'),
      data: getMappedCallSites().slice(1),
    })
  }

  const warn = (options: App.Infra.Logging.MessageOptions) => {
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
): App.Infra.Logging.ILogger => {
  const appOutput = createAppOutput(baseNamespace, ...subNamespaces)
  const internalOutput = createLoggerOutput(appOutput)
  const loggerLevels = createLoggerLevels(internalOutput)

  console.debug(`Logger created: %s`, chalk.yellow(appOutput.namespace))

  return {
    ...loggerLevels,
  }
}

export { createLogger }
