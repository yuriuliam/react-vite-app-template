import { useConst } from '@/modules/react/infra/hooks/useConst'

import { getLoggerInstance } from '../core/getLoggerInstance'

/**
 * An immutable instance of the Logger which can be called
 * within a component.
 *
 * Such logs are only shown under development mode.
 */
const useLogger = (subNamespace: string) =>
  useConst(getLoggerInstance(subNamespace))

export { useLogger }
