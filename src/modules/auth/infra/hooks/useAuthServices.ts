import { useConst } from '@/infra/react/hooks/useConst'

import { authenticateUser } from '../../data/use-cases/authenticateUserService'
import { authParamsSchema } from '../../data/use-cases/authParamsSchema'

const useAuthServices = () =>
  useConst({
    authenticateUser,
    authParamsSchema,
  })

export { useAuthServices }
