import { z } from 'zod'

import { EmailModel } from '@/shared/models/EmailModel'

const AuthenticationParamsModel = z.object({
  email: EmailModel.min(1, 'email is required.'),
  password: z.string().min(8, 'passwords must have at least 8 characters'),
})

export { AuthenticationParamsModel }
