import { z } from 'zod'

import { emailModel } from './generics'

const tokenModel = z.string().nonempty('token property is required.')

const userModel = z.object({
  id: z.string().nonempty('id property is required.'),
  name: z.string().nonempty('name property is required.'),
  email: emailModel.nonempty('email property is required.'),
})

const authResponseModel = userModel.extend({
  token: tokenModel,
})

export { authResponseModel, tokenModel, userModel }
