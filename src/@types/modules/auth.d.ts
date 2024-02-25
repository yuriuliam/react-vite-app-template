import type { AuthenticationParamsModel } from '@/modules/auth/domain/models/AuthenticationParams'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.Auth {
    type AppAuthenticationParams = z.infer<typeof AuthenticationParamsModel>

    type SignInFn = (params: AppAuthenticationParams) => Promise<void>
    type SignOutFn = () => void
  }
}

export = global
