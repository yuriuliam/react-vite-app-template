import { z } from 'zod'

import { EmailModel } from '@/shared/models'

const UserModel = z.object({
  id: z.string().min(1, 'id is required.'),
  name: z.string().min(1, 'name is required.'),
  email: EmailModel,
})

export { UserModel }
