import type { UserModel } from '@/modules/users/models/UserModel'
import type { UserResponseModel } from '@/modules/users/models/UserResponseModel'
import type { UserWithPasswordModel } from '@/modules/users/models/UserWithPasswordModel'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.User {
    type AppUser = z.infer<typeof UserModel>
    type AppUserResponse = z.infer<typeof UserResponseModel>
    type AppUserWithPassword = z.infer<typeof UserWithPasswordModel>
  }
}

export = global
