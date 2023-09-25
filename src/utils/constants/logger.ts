const LOGGER = Object.freeze({
  NAMES: Object.freeze({
    PROD: 'main',
    DEV: 'dev',
  }),
  NAMESPACES: Object.freeze({
    AUTH: 'providers:auth',
    FEATURES: 'providers:features',
    API: 'services:api',
  }),
})

export { LOGGER }
