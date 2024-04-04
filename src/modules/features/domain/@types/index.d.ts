import { type z } from 'zod'

import { type FeatureDataModel } from '../models/FeatureData'
import { type FeatureFlagModel } from '../models/FeatureFlag'
import { type FeaturesResponseModel } from '../models/FeaturesResponse'

declare global {
  declare namespace App.Modules.Features {
    type FeatureFlag = z.infer<typeof FeatureFlagModel>
    type FeatureData = z.infer<typeof FeatureDataModel>
    type FeaturesResponse = z.infer<typeof FeaturesResponseModel>

    type LoadFeaturesServiceFn = (
      token: App.Domain.Shared.Token | null,
    ) => Promise<FeaturesResponse | null>

    type CreateLoadFeaturesServiceFn = (
      httpClient: App.Domain.Http.IHttpClient,
      responseSchema: App.Domain.Validation.SchemaParser<FeaturesResponse>,
    ) => LoadFeaturesServiceFn
  }
}

export = global
