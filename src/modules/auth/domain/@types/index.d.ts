import { type z } from 'zod'

import { type AuthParamsModel } from '../models/AuthParamsModel'

declare global {
  declare namespace App.Modules.Auth {
    type AuthParams = z.infer<typeof AuthParamsModel>
    type AuthResponse = App.Modules.Users.UserResponse

    type SignInFn = (params: AuthParams) => Promise<void>
    type SignOutFn = () => void

    type AuthenticateUserServiceFn = (
      params: AuthParams,
    ) => Promise<AuthResponse | null>

    type CreateAuthenticateUserServiceFn = (
      httpClient: App.Domain.Http.IHttpClient,
      responseSchema: App.Domain.Validation.SchemaParser<AuthResponse>,
    ) => AuthenticateUserServiceFn
  }
}

export = global
