import { PRODUCTION_MODE_ID } from '@/config/environment'

import { isMode } from '@/data/environment/core/isMode'

/**
 * Quick way to check if it's Production mode.
 */
const isProductionMode = isMode.bind(null, PRODUCTION_MODE_ID)

export { isProductionMode }
