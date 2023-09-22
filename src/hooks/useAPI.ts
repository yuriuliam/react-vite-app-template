import { useConst } from './useConst'

import { APIMainV0 } from '@/services/api/main/v0'

/**
 * An immutable instance of the API which can be called
 * within a component.
 */
const useAPI = () => {
  return useConst(APIMainV0.getInstance())
}

export { useAPI }
