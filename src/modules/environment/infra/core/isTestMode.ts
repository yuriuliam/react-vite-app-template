import { EnvironmentMode } from '@/config/environment'

import { isMode } from '@/modules/environment/data/core/isMode'

/**
 * Quick way to check if it's Test mode.
 */
const isTestMode = isMode.bind(null, EnvironmentMode.Test)

export { isTestMode }
