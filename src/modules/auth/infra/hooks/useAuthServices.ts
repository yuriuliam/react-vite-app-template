import { useConst } from '@/modules/react/infra/hooks/useConst'

import { authenticateUser } from '../services/authenticateUserService'
import { authParamsSchema } from '../services/authParamsSchema'

const useAuthServices = () =>
  useConst({
    authenticateUser,
    authParamsSchema,
  })

export { useAuthServices }
