import type { FeaturesModel } from '@/modules/features/models/Features'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.Features {
    type AppFeatures = z.infer<typeof FeaturesModel>
  }
}

export = global
