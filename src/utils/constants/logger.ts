const LOGGER = Object.freeze({
  NAMES: Object.freeze({
    PROD: 'main',
    DEV: 'dev',
  }),
  NAMESPACES: Object.freeze({
    API: 'services:api',
    AUTH: 'providers:auth',
    FEATURES: 'providers:features',
    MODEL_VALIDATOR: 'providers:validators:model',
  }),
})

export { LOGGER }
