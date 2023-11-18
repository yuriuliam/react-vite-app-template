import { createAuthenticateUserService } from '../../data/services/createAuthenticateUserService'

import { mainHttpClient } from '@/infra/protocols/http/mainHttpClient'

const authenticateUser = createAuthenticateUserService(mainHttpClient)

export { authenticateUser }
