import { type z } from 'zod'

import { type UserModel } from '../models/User'
import { type UserResponseModel } from '../models/UserResponse'
import { type UserWithPasswordModel } from '../models/UserWithPassword'

declare global {
  declare namespace App.Modules.User {
    type AppUser = z.infer<typeof UserModel>
    type AppUserResponse = z.infer<typeof UserResponseModel>
    type AppUserWithPassword = z.infer<typeof UserWithPasswordModel>
  }
}

export = global
