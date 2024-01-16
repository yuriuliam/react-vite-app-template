import { authenticateUser } from '../services/authenticateUserService'
import { validateAuthenticationParams } from '../services/validateAuthenticationParams'

import { useConst } from '@/infra/react/hooks/useConst'

const useAuthServices = () =>
  useConst({
    authenticateUser,
    validateAuthenticationParams,
  })

export { useAuthServices }
