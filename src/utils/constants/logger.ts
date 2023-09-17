const LOGGER = Object.freeze({
  NAMES: Object.freeze({
    PROD: 'main',
    DEV: 'dev',
  }),
  NAMESPACES: Object.freeze({
    AUTH: 'providers:auth',
    FEATURES: 'providers:features',
    PAGES: 'routes:pages',
    API: 'services:api',
  }),
})

export { LOGGER }
