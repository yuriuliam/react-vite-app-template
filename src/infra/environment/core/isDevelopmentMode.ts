import { EnvironmentMode } from '@/config/environment'

import { isMode } from '@/data/environment/core/isMode'

/**
 * Quick way to check if it's Development mode.
 */
const isDevelopmentMode = isMode.bind(null, EnvironmentMode.Development)

export { isDevelopmentMode }
