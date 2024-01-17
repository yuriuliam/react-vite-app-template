import {
  DEVELOPMENT_MODE_ID,
  PRODUCTION_MODE_ID,
  TEST_MODE_ID,
} from '@/config/environment'

const isMode = (mode: string) => import.meta.env.MODE === mode

/**
 * Quick way to check if it's Development mode.
 */
const isDevelopmentMode = isMode.bind(null, DEVELOPMENT_MODE_ID)

/**
 * Quick way to check if it's Production mode. (a.k.a. the result of a `vite build`)
 */
const isProductionMode = isMode.bind(null, PRODUCTION_MODE_ID)

/**
 * Quick way to check if it's Test mode.
 */
const isTestMode = isMode.bind(null, TEST_MODE_ID)

export { isDevelopmentMode, isProductionMode, isTestMode }
