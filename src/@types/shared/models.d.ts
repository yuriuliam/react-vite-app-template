import type { EmailModel } from '@/shared/models/EmailModel'
import type { TokenModel } from '@/shared/models/TokenModel'
import type { z } from 'zod'

declare global {
  declare namespace App.Models {
    type EmailModel = z.infer<typeof EmailModel>
    type TokenModel = z.infer<typeof TokenModel>
  }
}

export = global
