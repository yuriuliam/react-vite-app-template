import { useConst } from '@/infra/react/hooks/useConst'

import { authenticateUser } from '../services/authenticateUserService'
import { validateAuthenticationParams } from '../services/validateAuthenticationParams'

const useAuthServices = () =>
  useConst({
    authenticateUser,
    validateAuthenticationParams,
  })

export { useAuthServices }
