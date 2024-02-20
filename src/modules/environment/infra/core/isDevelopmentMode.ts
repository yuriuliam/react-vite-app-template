import { EnvironmentMode } from '@/config/environment'

import { isMode } from '@/modules/environment/data/core/isMode'

/**
 * Quick way to check if it's Development mode.
 */
const isDevelopmentMode = isMode.bind(null, EnvironmentMode.Development)

export { isDevelopmentMode }
