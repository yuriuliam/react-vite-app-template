import { useConst } from './useConst'

import { Logger } from '../services/logger'

const useLogger = (subNamespace?: string) => {
  return useConst(Logger.getInstance(subNamespace))
}

export { useLogger }
