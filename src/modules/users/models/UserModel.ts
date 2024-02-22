import { z } from 'zod'

import { EmailModel } from '@/modules/shared/data/models/EmailModel'

const UserModel = z.object({
  id: z.string().min(1, 'id is required.'),
  name: z.string().min(1, 'name is required.'),
  username: z.string().min(1, 'username is required'),
  email: EmailModel,
})

export { UserModel }
