import { type z } from 'zod'

import { type AuthParamsModel } from '../models/AuthParamsModel'

declare global {
  declare namespace App.Modules.Auth {
    type AuthParamsModel = z.infer<typeof AuthParamsModel>
    type AuthResponse = App.Modules.Users.UserResponse

    type SignInFn = (params: AuthParamsModel) => Promise<void>
    type SignOutFn = () => void

    type AuthenticateUserServiceFn = (
      params: AuthParamsModel,
    ) => Promise<AuthResponse | null>

    type CreateAuthenticateUserServiceFn = (
      httpClient: App.Domain.Http.IHttpClient,
      responseSchema: App.Domain.Validation.SchemaParser<AuthResponse>,
    ) => AuthenticateUserServiceFn
  }
}

export = global
