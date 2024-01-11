import { getLoggerInstance } from '../core/getLoggerInstance'

import { useConst } from '@/infra/react/hooks/useConst'

/**
 * An immutable instance of the Logger which can be called
 * within a component.
 */
const useLogger = (subNamespace: string) =>
  useConst(getLoggerInstance(subNamespace))

export { useLogger }
