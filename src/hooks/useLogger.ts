import { useConst } from './useConst'

import { Logger } from '@/services/logger'

/**
 * An immutable instance of the Logger which can be called
 * within a component.
 */
const useLogger = (subNamespace?: string) => {
  return useConst(Logger.getInstance(subNamespace))
}

export { useLogger }
