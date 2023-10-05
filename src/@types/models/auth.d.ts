import type { authResponseModel, tokenModel, userModel } from '@/models/auth'
import type { z } from 'zod'

declare global {
  declare namespace AppModels {
    type AuthResponse = z.infer<typeof authResponseModel>
    type AuthToken = z.infer<typeof tokenModel>
    type User = z.infer<typeof userModel>
  }
}

export = global
