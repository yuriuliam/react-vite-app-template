import { z } from 'zod'

import { FeatureFlagModel } from './FeatureFlag'

const FeaturesModel = z.array(FeatureFlagModel)

export { FeaturesModel }
