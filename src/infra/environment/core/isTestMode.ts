import { TEST_MODE_ID } from '@/config/environment'

import { isMode } from '@/data/environment/core/isMode'

/**
 * Quick way to check if it's Test mode.
 */
const isTestMode = isMode.bind(null, TEST_MODE_ID)

export { isTestMode }
