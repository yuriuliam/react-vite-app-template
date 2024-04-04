import { type z } from 'zod'

import { type AuthenticationParamsModel } from '../models/AuthenticationParams'

declare global {
  declare namespace App.Modules.Auth {
    type AppAuthenticationParams = z.infer<typeof AuthenticationParamsModel>
    type AuthResponse = App.Modules.Users.UserResponse

    type SignInFn = (params: AppAuthenticationParams) => Promise<void>
    type SignOutFn = () => void

    type AuthenticateUserServiceFn = (
      params: AppAuthenticationParams,
    ) => Promise<AuthResponse | null>

    type CreateAuthenticateUserServiceFn = (
      httpClient: App.Domain.Http.IHttpClient,
      responseSchema: App.Domain.Validation.SchemaParser<AuthResponse>,
    ) => AuthenticateUserServiceFn
  }
}

export = global
