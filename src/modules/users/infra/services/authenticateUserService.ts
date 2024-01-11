import { createAuthenticateUserService } from '../../data/services/createAuthenticateUserService'

import { mainHttpClient } from '@/infra/http/mainHttpClient'

const authenticateUser = createAuthenticateUserService(mainHttpClient)

export { authenticateUser }
