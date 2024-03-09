import { useConst } from '@/infra/react/hooks/useConst'

import { getLoggerInstance } from '../use-cases/getLoggerInstance'

/**
 * An immutable instance of the Logger which can be called
 * within a component.
 *
 * Such logs are only shown under development mode.
 */
const useLogger = (...subNamespaces: string[]) =>
  useConst(getLoggerInstance(...subNamespaces))

export { useLogger }
