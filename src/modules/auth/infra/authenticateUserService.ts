import { mainHttpClient } from '@/infra/http/mainHttpClient'

import { userResponseSchemaParser } from '@/modules/users/infra/userResponseSchemaParser'

import { createAuthenticateUserService } from '../data/subjects/createAuthenticateUserService'

const authenticateUserService = createAuthenticateUserService(
  mainHttpClient,
  userResponseSchemaParser,
)

export { authenticateUserService }
