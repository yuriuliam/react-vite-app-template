import { type z } from 'zod'

import { type FeatureDataModel } from '@/modules/features/domain/models/FeatureData'
import { type FeatureFlagModel } from '@/modules/features/domain/models/FeatureFlag'
import { type FeaturesModel } from '@/modules/features/domain/models/Features'
import { type FeaturesResponseModel } from '@/modules/features/domain/models/FeaturesResponse'

declare global {
  declare namespace App.Modules.Features {
    type AppFeatureFlag = z.infer<typeof FeatureFlagModel>
    type AppFeatures = z.infer<typeof FeaturesModel>
    type AppFeatureData = z.infer<typeof FeatureDataModel>
    type AppFeaturesResponse = z.infer<typeof FeaturesResponseModel>
  }
}

export = global
