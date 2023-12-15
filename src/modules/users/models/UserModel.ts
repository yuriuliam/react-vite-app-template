import { z } from 'zod'

import { EmailModel } from '@/shared/models'

const UserModel = z.object({
  id: z.string().min(1, 'id is required.'),
  name: z.string().min(1, 'name is required.'),
  username: z.string().min(1, 'username is required'),
  email: EmailModel,
  password: z.string().min(8, 'password must be 8 characters long'),
})

export { UserModel }
