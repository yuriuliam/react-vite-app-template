import type { authResponseModel, tokenModel, userModel } from '@/models/auth'
import type { z } from 'zod'

declare global {
  declare namespace AppModels {
    type AuthResponse = z.infer<typeof authResponseModel>
    type User = z.infer<typeof userModel>
    type UserToken = z.infer<typeof tokenModel>
  }
}

export = global
