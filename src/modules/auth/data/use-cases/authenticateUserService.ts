import { mainHttpClient } from '@/data/http/use-cases/mainHttpClient'

import { userResponseSchemaParser } from '@/modules/users/data/use-cases/userResponseSchemaParser'

import { createAuthenticateUserService } from '../../infra/use-cases/createAuthenticateUserService'

const authenticateUser = createAuthenticateUserService(
  mainHttpClient,
  userResponseSchemaParser,
)

export { authenticateUser }
