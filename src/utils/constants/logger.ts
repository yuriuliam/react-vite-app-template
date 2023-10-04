const LOGGER = Object.freeze({
  NAMES: Object.freeze({
    PROD: 'main',
    DEV: 'dev',
  }),
  NAMESPACES: Object.freeze({
    API_SERVICE: 'services:api',
    AUTH_PROVIDER: 'providers:auth',
    FEATURES_PROVIDER: 'providers:features',
  }),
})

export { LOGGER }
