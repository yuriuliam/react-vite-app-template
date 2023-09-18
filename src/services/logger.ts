import chalk from 'chalk'
import debug, { type Debugger } from 'debug'

import { LOGGER } from '../utils/constants'
import { formatToLoggerTime } from '../utils/datetimes'

type MessagePayload = Record<any, any> | any[]
type MessageOptions = {
  name?: string
  title: string
  content: string
  data?: Utils.MaybePromise<MessagePayload | null>
  style?: 'default' | 'inline'
}

class Logger {
  private _output: Debugger

  private static readonly _debug = debug('app')
  private static readonly _instances = new Map<string, Logger>([
    [LOGGER.NAMES.PROD, new Logger(LOGGER.NAMES.PROD, true)],
    [LOGGER.NAMES.DEV, new Logger(LOGGER.NAMES.DEV, true)],
  ])

  private constructor(namespace: string, silent = false) {
    this._output = Logger._debug.extend(namespace)

    if (!silent) {
      console.debug(`Logger created: %s`, chalk.yellow(this._output.namespace))
    }
  }

  public get _namespace() {
    return this._output.namespace.slice(4)
  }

  public static getGlobalInstance() {
    return Logger._instances.get(LOGGER.NAMES.PROD)!
  }

  public static getInstance(subNamespace?: string) {
    const devLogger = Logger._instances.get(LOGGER.NAMES.DEV)!

    if (!subNamespace) return devLogger

    if (Logger._instances.has(subNamespace)) {
      return Logger._instances.get(subNamespace)!
    }

    return Logger._instances
      .set(subNamespace, devLogger.extend(subNamespace))
      .get(subNamespace)!
  }

  public extend(subNamespace: string): Logger {
    const extendedInstance = new Logger(this._namespace, true)
    extendedInstance._output = extendedInstance._output.extend(subNamespace)

    console.debug(
      `Logger extended: from [%s] to [%s]`,
      chalk.yellow(this._output.namespace),
      chalk.yellow(extendedInstance._output.namespace),
    )

    return extendedInstance
  }

  public error(options: Omit<MessageOptions, 'title'>) {
    void this.output({
      ...options,
      title: chalk.red('Error (!)'),
      content: chalk.redBright(options.content),
    })
  }

  public log(options: MessageOptions) {
    void this.output({
      ...options,
      title: chalk.yellow(options.title),
      content: chalk.blueBright(options.content),
    })
  }

  public warn(options: MessageOptions) {
    void this.output({
      ...options,
      title: chalk.hex('FFAA00')(options.title),
      content: chalk.blueBright(options.content),
    })
  }

  private async output(options: MessageOptions) {
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

      this._output(dataFormatter, now, name, title, content, payload)

      return
    }

    this._output('%s | [%s] %s - %s', now, name, title, content)
  }
}

export { Logger }
