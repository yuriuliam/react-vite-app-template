import { EnvironmentMode } from '../enums/EnvironmentMode'
import { isMode } from '../utils/isMode'

/**
 * Quick way to check if it's Production mode.
 */
const isProductionMode = isMode.bind(null, EnvironmentMode.Production)

export { isProductionMode }
