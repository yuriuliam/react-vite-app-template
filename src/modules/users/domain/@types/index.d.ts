import { type z } from 'zod'

import { type UserModel } from '../models/User'
import { type UserResponseModel } from '../models/UserResponse'
import { type UserWithPasswordModel } from '../models/UserWithPassword'

declare global {
  declare namespace App.Modules.Users {
    type User = z.infer<typeof UserModel>
    type UserResponse = z.infer<typeof UserResponseModel>
    type UserWithPassword = z.infer<typeof UserWithPasswordModel>
  }
}

export = global
