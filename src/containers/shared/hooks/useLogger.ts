import { useConst } from './useConst'

import { getLoggerInstance } from '@/infra/protocols/logger/getLoggerInstance'

/**
 * An immutable instance of the Logger which can be called
 * within a component.
 */
const useLogger = (subNamespace: string) =>
  useConst(getLoggerInstance(subNamespace))

export { useLogger }
