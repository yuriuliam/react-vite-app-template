import { createLogger } from '../core/createLogger'
import { LoggerName } from '../enums/LoggerName'
import { concatLoggerNames } from '../utils/concatLoggerNames'
import { getInternalLoggerName } from '../utils/getInternalLoggerName'

/**
 * Inject Global Logger
 */
const createGlobalLoggerInjector: App.Modules.Logging.CreateLoggerInjectorFn = (
  formatTime,
  isDev,
) => {
  return () => {
    const globalLogger =
      globalThis.logger ?? createLogger(formatTime, LoggerName.Production)

    const allDevLoggers = getInternalLoggerName('dev', 'all')
    const allProdLoggers = getInternalLoggerName('prod', 'all')

    // Inserting debug flag to display information
    globalThis.localStorage.debug = isDev
      ? concatLoggerNames(allDevLoggers, allProdLoggers)
      : allProdLoggers

    // Creating Global Logger Instance which cannot be changed.
    Reflect.defineProperty(globalThis, 'logger', {
      configurable: false,
      value: globalLogger,
      writable: false,
    })
  }
}

export { createGlobalLoggerInjector }
