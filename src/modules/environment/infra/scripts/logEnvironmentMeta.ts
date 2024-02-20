import { getGlobalLoggerInstance } from '@/modules/logger/infra/core/getGlobalLoggerInstance'

import { isDevelopmentMode } from '../core/isDevelopmentMode'

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
