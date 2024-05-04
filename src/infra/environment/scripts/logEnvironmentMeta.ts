import { isDevelopmentMode } from '@/data/environment/subjects/isDevelopmentMode'

const logEnvironmentMeta = () => {
  if (!isDevelopmentMode()) return

  logger.info({
    name: 'App',
    title: 'Vite',
    content: 'DEV Environment detected',
    data: { env: import.meta.env },
    style: 'inline',
  })
}

export { logEnvironmentMeta }
