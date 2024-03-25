import { useConst } from '@/data/shared/hooks/useConst'

import { authenticateUser } from '../authenticateUserService'
import { authParamsSchema } from '../authParamsSchema'

const useAuthServices = () =>
  useConst({
    authenticateUser,
    authParamsSchema,
  })

export { useAuthServices }
