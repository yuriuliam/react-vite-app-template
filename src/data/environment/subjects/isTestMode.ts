import { EnvironmentMode } from '../enums/EnvironmentMode'
import { isMode } from '../utils/isMode'

/**
 * Quick way to check if it's Test mode.
 */
const isTestMode = isMode.bind(null, EnvironmentMode.Test)

export { isTestMode }
