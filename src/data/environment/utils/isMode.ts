import { type EnvironmentMode } from '../enums/EnvironmentMode'

/**
 * Tells if the current environment mode matches a given one.
 */
const isMode = (mode: EnvironmentMode) => import.meta.env.MODE === mode

export { isMode }
