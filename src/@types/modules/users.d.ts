import type { UserModel } from '@/modules/users/models/UserModel'
import type { UserResponseModel } from '@/modules/users/models/UserResponseModel'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.User {
    type AppUser = z.infer<typeof UserModel>
    type AppUserResponse = z.infer<typeof UserResponseModel>
  }
}

export = global
