import type { AuthenticationParamsModel } from '@/modules/auth/models/AuthenticationParamsModel'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.Auth {
    type AuthenticationParamsModel = z.infer<typeof AuthenticationParamsModel>
  }
}

export = global
