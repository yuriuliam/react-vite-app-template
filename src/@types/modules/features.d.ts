import type { FeaturesModel } from '@/modules/features/models'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.Features {
    type FeaturesModel = z.infer<typeof FeaturesModel>
  }
}

export = global
