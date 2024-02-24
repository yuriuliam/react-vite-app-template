import { isDevelopmentMode } from '@/data/environment/use-cases/isDevelopmentMode'

import { LoggerName } from '@/domain/logger/enums/LoggerName'

import { composeLoggerNames } from '@/infra/logger/utils/composeLoggerNames'

import { getGlobalLoggerInstance } from '../use-cases/getGlobalLoggerInstance'

/**
 * Inject Global Logger
 */
const injectGlobalLogger = () => {
  const globalLogger = globalThis.logger ?? getGlobalLoggerInstance()

  const allLoggerNames = composeLoggerNames(LoggerName.Base, '*')
  const mainLoggerName = composeLoggerNames(
    LoggerName.Base,
    LoggerName.Production,
  )
  const mainLoggerChildrenName = composeLoggerNames(mainLoggerName, '*')

  // Inserting debug flag to display information
  globalThis.localStorage.debug = isDevelopmentMode()
    ? allLoggerNames
    : `${mainLoggerName},${mainLoggerChildrenName}`

  // Creating Global Logger Instance which cannot be changed.
  Reflect.defineProperty(globalThis, 'logger', {
    configurable: false,
    value: globalLogger,
    writable: false,
  })
}

export { injectGlobalLogger }
