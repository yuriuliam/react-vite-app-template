import { isDevelopmentMode } from '../utils/environment'

import { getGlobalLoggerInstance } from '@/infra/protocols/logger/getGlobalLoggerInstance'

/**
 * Inject Global Logger
 */
const injectGlobalLogger = () => {
  const globalLogger = globalThis.logger ?? getGlobalLoggerInstance()

  // Inserting debug flag to display information
  globalThis.localStorage.debug = isDevelopmentMode()
    ? 'app:*'
    : 'app:main,app:main:*'

  // Creating Global Logger Instance
  globalThis.logger = globalLogger
}

export { injectGlobalLogger }
