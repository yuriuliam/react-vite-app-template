import { EnvironmentMode } from '@/domain/environment/enums/EnvironmentMode'

import { isMode } from '@/infra/environment/use-cases/isMode'

/**
 * Quick way to check if it's Development mode.
 */
const isDevelopmentMode = isMode.bind(null, EnvironmentMode.Development)

export { isDevelopmentMode }
