import type { featuresResponseModel } from '@/models/features'
import type { z } from 'zod'

declare global {
  declare namespace AppModels {
    type FeaturesResponse = z.infer<typeof featuresResponseModel>
  }
}

export = global
