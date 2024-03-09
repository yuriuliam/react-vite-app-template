import { isDevelopmentMode } from '@/data/environment/use-cases/isDevelopmentMode'

import {
  LOGGER_DELIMITER,
  LOGGER_FULL_NAME_DEV,
  LOGGER_FULL_NAME_PROD,
} from '@/infra/logger/config/logger'

import { getGlobalLoggerInstance } from '../use-cases/getGlobalLoggerInstance'

/**
 * Inject Global Logger
 */
const injectGlobalLogger = () => {
  const globalLogger = globalThis.logger ?? getGlobalLoggerInstance()

  const devChildrenLogger = [LOGGER_FULL_NAME_DEV, '*'].join(LOGGER_DELIMITER)
  const prodChildrenLoggers = [LOGGER_FULL_NAME_PROD, '*'].join(
    LOGGER_DELIMITER,
  )

  const allDevLoggers = [LOGGER_FULL_NAME_DEV, devChildrenLogger].join(',')
  const allProdLoggers = [LOGGER_FULL_NAME_PROD, prodChildrenLoggers].join(',')

  // Inserting debug flag to display information
  globalThis.localStorage.debug = isDevelopmentMode()
    ? [allDevLoggers, allProdLoggers].join(',')
    : allProdLoggers

  // Creating Global Logger Instance which cannot be changed.
  Reflect.defineProperty(globalThis, 'logger', {
    configurable: false,
    value: globalLogger,
    writable: false,
  })
}

export { injectGlobalLogger }
