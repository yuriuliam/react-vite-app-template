import type { FeaturesModel } from '@/modules/features/domain/models/Features'
import type { z } from 'zod'

declare global {
  declare namespace App.Modules.Features.Domain {
    type AppFeatures = z.infer<typeof FeaturesModel>
  }
}

export = global
