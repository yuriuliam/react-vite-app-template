import { getGlobalLoggerInstance } from '../core/getGlobalLoggerInstance'

import { useConst } from '@/infra/react/hooks/useConst'

/**
 * An immutable instance of the Global Logger which can be called
 * within a component.
 */
const useGlobalLogger = () =>
  useConst(globalThis.logger ?? getGlobalLoggerInstance())

export { useGlobalLogger }
