const DEVELOPMENT_MODE = 'development'
const PRODUCTION_MODE = 'production'
const TEST_MODE = 'test'

const isMode = (mode: string) => import.meta.env.MODE === mode

const isDevelopmentMode = isMode.bind(null, DEVELOPMENT_MODE)

const isProductionMode = isMode.bind(null, PRODUCTION_MODE)

const isTestMode = isMode.bind(null, TEST_MODE)

export { isDevelopmentMode, isProductionMode, isTestMode }
