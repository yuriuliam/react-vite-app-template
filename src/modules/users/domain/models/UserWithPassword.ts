import { z } from 'zod'

import { UserModel } from './User'

const UserWithPasswordModel = UserModel.extend({
  password: z.string().min(8, 'password must be 8 characters long'),
})

export { UserWithPasswordModel }
