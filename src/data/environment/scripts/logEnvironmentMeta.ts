import { getGlobalLoggerInstance } from '@/data/logger/use-cases/getGlobalLoggerInstance'

import { isDevelopmentMode } from '../use-cases/isDevelopmentMode'

const logEnvironmentMeta = () => {
  if (!isDevelopmentMode()) return

  const logger = getGlobalLoggerInstance('environment')

  logger.info({
    name: 'App',
    title: 'Vite',
    content: 'DEV Environment detected',
    data: { env: import.meta.env, url: import.meta.url },
    style: 'inline',
  })
}

export { logEnvironmentMeta }
