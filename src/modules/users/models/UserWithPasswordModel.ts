import { z } from 'zod'

import { UserModel } from './UserModel'

const UserWithPasswordModel = UserModel.extend({
  password: z.string().min(8, 'password must be 8 characters long'),
})

export { UserWithPasswordModel }
