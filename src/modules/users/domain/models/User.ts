import { z } from 'zod'

import { EmailModel } from '@/domain/commons/models/Email'

const UserModel = z.object({
  id: z.string().min(1, 'id is required.'),
  name: z.string().min(1, 'name is required.'),
  username: z.string().min(1, 'username is required'),
  email: EmailModel,
})

export { UserModel }
