import { EnvironmentMode } from '@/domain/environment/enums/EnvironmentMode'

import { isMode } from '@/infra/environment/use-cases/isMode'

/**
 * Quick way to check if it's Test mode.
 */
const isTestMode = isMode.bind(null, EnvironmentMode.Test)

export { isTestMode }
