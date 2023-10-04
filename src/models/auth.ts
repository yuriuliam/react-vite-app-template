import { z } from 'zod'

const token = z.string().nonempty('token property is required.')

const user = z.object({
  id: z.string().nonempty('id property is required.'),
  name: z.string().nonempty('name property is required.'),
  email: z
    .string()
    .nonempty('email property is required.')
    .email('given email is not valid.'),
})

const authResponse = user.extend({
  token,
})

export { authResponse, token, user }
