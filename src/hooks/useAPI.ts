import { useConst } from './useConst'

import { APIMain } from '../services/api/main'

const useAPI = () => {
  return useConst(APIMain.getInstance())
}

export { useAPI }
