import { useConst } from '@/infra/react/hooks/useConst'

import { getLoggerInstance } from '../core/getLoggerInstance'

/**
 * An immutable instance of the Logger which can be called
 * within a component.
 */
const useLogger = (subNamespace: string) =>
  useConst(getLoggerInstance(subNamespace))

export { useLogger }
