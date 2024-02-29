import { z } from 'zod'

import { FeatureFlagModel } from './FeatureFlag'

const FeatureDataModel = z.object({
  id: z.string().min(1),
  code: FeatureFlagModel,
  description: z.string(),
})

export { FeatureDataModel }
