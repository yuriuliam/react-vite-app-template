import { DEVELOPMENT_MODE_ID } from '@/config/environment'

import { isMode } from '@/data/environment/isMode'

/**
 * Quick way to check if it's Development mode.
 */
const isDevelopmentMode = isMode.bind(null, DEVELOPMENT_MODE_ID)

export { isDevelopmentMode }
