import type { EmailModel } from '@/domain/shared/models/Email'
import type { TokenModel } from '@/domain/shared/models/Token'
import type { z } from 'zod'

declare global {
  declare namespace App.Domain.Shared {
    type Email = z.infer<typeof EmailModel>
    type Token = z.infer<typeof TokenModel>
  }
}

export = global
