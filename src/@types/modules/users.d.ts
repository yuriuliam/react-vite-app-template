import type { AuthenticationParamsModel } from '@/modules/users/models/AuthenticationParamsModel'
import type { UserModel } from '@/modules/users/models/UserModel'
import type { UserResponseModel } from '@/modules/users/models/UserResponseModel'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.User {
    type AuthenticationParamsModel = z.infer<typeof AuthenticationParamsModel>
    type UserModel = z.infer<typeof UserModel>
    type UserResponseModel = z.infer<typeof UserResponseModel>
  }
}

export = global
