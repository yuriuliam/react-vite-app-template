import { z } from 'zod'

import { emailModel } from './generics'

const authTokenModel = z.string()

const authUserModel = z.object({
  id: z.string().min(1, 'id property is required.'),
  name: z.string().min(1, 'name property is required.'),
  email: emailModel.min(1, 'email property is required.'),
})

const authResponseModel = authUserModel.extend({
  token: authTokenModel.min(1, 'token property is required.'),
})

export { authResponseModel, authUserModel, authTokenModel }
