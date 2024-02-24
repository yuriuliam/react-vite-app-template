import { EnvironmentMode } from '@/domain/environment/enums/EnvironmentMode'

import { isMode } from '@/infra/environment/use-cases/isMode'

/**
 * Quick way to check if it's Production mode.
 */
const isProductionMode = isMode.bind(null, EnvironmentMode.Production)

export { isProductionMode }
