import { mainHttpClient } from '@/modules/http/infra/core/mainHttpClient'
import { userResponseSchema } from '@/modules/users/infra/services/userResponseSchema'

import { createAuthenticateUserService } from '../../data/services/createAuthenticateUserService'

const authenticateUser = createAuthenticateUserService(
  mainHttpClient,
  userResponseSchema,
)

export { authenticateUser }
