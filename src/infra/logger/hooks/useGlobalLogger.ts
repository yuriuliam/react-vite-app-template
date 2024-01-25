import { useConst } from '@/infra/react/hooks/useConst'

import { getGlobalLoggerInstance } from '../core/getGlobalLoggerInstance'

/**
 * An immutable instance of the Global Logger which can be called
 * within a component.
 */
const useGlobalLogger = (subNamespace?: string | undefined) =>
  useConst(
    subNamespace ? getGlobalLoggerInstance(subNamespace) : globalThis.logger,
  )

export { useGlobalLogger }
