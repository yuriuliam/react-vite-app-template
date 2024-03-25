import { type z } from 'zod'

import { type AuthenticationParamsModel } from '../models/AuthenticationParams'

declare global {
  declare namespace App.Modules.Auth {
    type AppAuthenticationParams = z.infer<typeof AuthenticationParamsModel>

    type SignInFn = (params: AppAuthenticationParams) => Promise<void>
    type SignOutFn = () => void

    type AuthenticateUserFn<T> = (
      params: AppAuthenticationParams,
    ) => Promise<T | null>

    type CreateAuthenticateUserServiceFn = <T>(
      httpClient: App.Domain.Http.IHttpClient,
      responseSchema: App.Domain.Validation.SchemaParser<T>,
    ) => AuthenticateUserFn<T>
  }
}

export = global
