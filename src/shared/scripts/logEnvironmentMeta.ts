import { isDevelopmentMode } from '../utils/environment'

import { getGlobalLoggerInstance } from '@/infra/logger/core/getGlobalLoggerInstance'

const logEnvironmentMeta = () => {
  if (!isDevelopmentMode()) return

  const globalLogger = globalThis.logger ?? getGlobalLoggerInstance()

  globalLogger.log({
    name: 'App',
    title: 'Vite',
    content: 'DEV Environment detected',
    data: { env: import.meta.env, url: import.meta.url },
    style: 'inline',
  })
}

export { logEnvironmentMeta }
