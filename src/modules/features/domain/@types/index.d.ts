import { type z } from 'zod'

import { type FeatureDataModel } from '../models/FeatureData'
import { type FeatureFlagModel } from '../models/FeatureFlag'
import { type FeaturesResponseModel } from '../models/FeaturesResponse'

declare global {
  declare namespace App.Modules.Features {
    type FeatureFlag = z.infer<typeof FeatureFlagModel>
    type FeatureData = z.infer<typeof FeatureDataModel>
    type FeaturesResponse = z.infer<typeof FeaturesResponseModel>

    type LoadFeaturesServiceFn<T> = (
      token: App.Domain.Shared.Token | null,
    ) => Promise<T | null>

    type CreateLoadFeaturesServiceFn = <T>(
      httpClient: App.Domain.Http.IHttpClient,
      responseSchema: App.Domain.Validation.SchemaParser<T>,
    ) => LoadFeaturesServiceFn<T>
  }
}

export = global
