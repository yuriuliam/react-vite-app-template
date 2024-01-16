import { mainHttpClient } from '@/infra/http/mainHttpClient'

import { createAuthenticateUserService } from '../../data/services/createAuthenticateUserService'

const authenticateUser = createAuthenticateUserService(mainHttpClient)

export { authenticateUser }
