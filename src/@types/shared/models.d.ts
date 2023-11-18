import type { EmailModel, TokenModel } from '@/shared/models'
import type { z } from 'zod'

declare global {
  declare namespace App.Models {
    type EmailModel = z.infer<typeof EmailModel>
    type TokenModel = z.infer<typeof TokenModel>
  }
}

export = global
