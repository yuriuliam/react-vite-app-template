import { z } from 'zod'

import { emailModel } from './generics'

const authTokenModel = z.string().nonempty('token is required.')

const authUserModel = z.object({
  id: z.string().nonempty('id property is required.'),
  name: z.string().nonempty('name property is required.'),
  email: emailModel.nonempty('email property is required.'),
})

const authResponseModel = authUserModel.extend({
  token: authTokenModel.nonempty('token property is required.'),
})

export { authResponseModel, authUserModel, authTokenModel }
