import { EnvironmentMode } from '@/config/environment'

import { isMode } from '@/modules/environment/data/core/isMode'

/**
 * Quick way to check if it's Production mode.
 */
const isProductionMode = isMode.bind(null, EnvironmentMode.Production)

export { isProductionMode }
