import type {
  authResponseModel,
  authTokenModel,
  authUserModel,
} from '@/models/auth'
import type { z } from 'zod'

declare global {
  declare namespace AppModels {
    type AuthResponse = z.infer<typeof authResponseModel>
    type AuthToken = z.infer<typeof authTokenModel>
    type AuthUser = z.infer<typeof authUserModel>
  }
}

export = global
