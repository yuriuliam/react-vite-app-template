import type { authResponse, token, user } from '@/models/auth'
import type { z } from 'zod'

declare global {
  declare namespace AppModels {
    type AuthResponse = z.infer<typeof authResponse>
    type User = z.infer<typeof user>
    type UserToken = z.infer<typeof token>
  }
}

export = global
