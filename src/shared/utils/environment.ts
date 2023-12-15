const DEVELOPMENT_MODE = 'development'
const PRODUCTION_MODE = 'production'
const TEST_MODE = 'test'

const isMode = (mode: string) => import.meta.env.MODE === mode

/**
 * Quick way to check if it's Development mode.
 */
const isDevelopmentMode = isMode.bind(null, DEVELOPMENT_MODE)

/**
 * Quick way to check if it's Production mode. (a.k.a. the result of a `vite build`)
 */
const isProductionMode = isMode.bind(null, PRODUCTION_MODE)

/**
 * Quick way to check if it's Test mode.
 */
const isTestMode = isMode.bind(null, TEST_MODE)

export { isDevelopmentMode, isProductionMode, isTestMode }
