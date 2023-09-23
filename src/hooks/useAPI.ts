import { useConst } from './useConst'

import { APIMain } from '@/services/api/main'

/**
 * An immutable instance of the API which can be called
 * within a component.
 */
const useAPI = () => {
  return useConst(APIMain.getInstance())
}

export { useAPI }
