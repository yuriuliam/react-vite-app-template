import { type z } from 'zod'

import { type FeatureDataModel } from '../models/FeatureData'
import { type FeatureFlagModel } from '../models/FeatureFlag'
import { type FeaturesResponseModel } from '../models/FeaturesResponse'

declare global {
  declare namespace App.Modules.Features {
    type FeatureFlag = z.infer<typeof FeatureFlagModel>
    type FeatureData = z.infer<typeof FeatureDataModel>
    type FeaturesResponse = z.infer<typeof FeaturesResponseModel>
  }
}

export = global
