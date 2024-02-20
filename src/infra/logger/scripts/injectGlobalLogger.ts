import { LoggerName } from '@/config/logger'

import { composeLoggerNames } from '@/data/logger/utils/composeLoggerNames'

import { isDevelopmentMode } from '@/infra/environment/core/isDevelopmentMode'

import { getGlobalLoggerInstance } from '../core/getGlobalLoggerInstance'

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
