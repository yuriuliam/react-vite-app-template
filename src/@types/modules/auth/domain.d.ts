import type { AuthenticationParamsModel } from '@/modules/auth/domain/models/AuthenticationParams'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.Auth.Domain {
    type AppAuthenticationParams = z.infer<typeof AuthenticationParamsModel>
  }
}

export = global
