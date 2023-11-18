import type {
  AuthenticationParamsModel,
  UserModel,
  UserResponseModel,
} from '@/modules/users/models'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.User {
    type AuthenticationParamsModel = z.infer<typeof AuthenticationParamsModel>
    type UserModel = z.infer<typeof UserModel>
    type UserResponseModel = z.infer<typeof UserResponseModel>
  }
}

export = global
