import { EnvironmentMode } from '../enums/EnvironmentMode'
import { isMode } from '../utils/isMode'

/**
 * Quick way to check if it's Development mode.
 */
const isDevelopmentMode: App.Domain.Environment.IsDevelopmentFn = isMode.bind(
  null,
  EnvironmentMode.Development,
)

export { isDevelopmentMode }
