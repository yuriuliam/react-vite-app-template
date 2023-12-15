import { isDevelopmentMode } from '../utils/environment'

const logEnvironmentMeta = () => {
  if (!isDevelopmentMode()) return

  globalThis.logger.log({
    name: 'App',
    title: 'Vite',
    content: 'DEV Environment detected',
    data: { env: import.meta.env, url: import.meta.url },
    style: 'inline',
  })
}

export { logEnvironmentMeta }
