import { getGlobalLoggerInstance } from '@/infra/logger/core/getGlobalLoggerInstance'

import { isDevelopmentMode } from '../utils/environment'

/**
 * Inject Global Logger
 */
const injectGlobalLogger = () => {
  const globalLogger = globalThis.logger ?? getGlobalLoggerInstance()

  // Inserting debug flag to display information
  globalThis.localStorage.debug = isDevelopmentMode()
    ? 'app:*'
    : 'app:main,app:main:*'

  // Creating Global Logger Instance which cannot be changed.
  Reflect.defineProperty(globalThis, 'logger', {
    configurable: false,
    value: globalLogger,
    writable: false,
  })
}

export { injectGlobalLogger }
