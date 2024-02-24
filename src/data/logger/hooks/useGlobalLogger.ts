import { useConst } from '@/infra/react/hooks/useConst'

import { getGlobalLoggerInstance } from '../use-cases/getGlobalLoggerInstance'

/**
 * An immutable instance of the Global Logger which can be called
 * within a component.
 *
 * You can optionally give a sub-namespace to extend the global logger.
 */
const useGlobalLogger = (subNamespace?: string | undefined) =>
  useConst(
    subNamespace ? getGlobalLoggerInstance(subNamespace) : globalThis.logger,
  )

export { useGlobalLogger }
