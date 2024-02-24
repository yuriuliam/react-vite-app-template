import type { EmailModel } from '@/modules/shared/data/models/EmailModel'
import type { TokenModel } from '@/modules/shared/data/models/TokenModel'
import type { z } from 'zod'

declare global {
  declare namespace App.Models {
    type EmailModel = z.infer<typeof EmailModel>
    type TokenModel = z.infer<typeof TokenModel>
  }
}

export = global
