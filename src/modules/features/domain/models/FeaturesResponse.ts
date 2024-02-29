import { z } from 'zod'

import { FeatureDataModel } from './FeatureData'

const FeaturesResponseModel = z.array(FeatureDataModel)

export { FeaturesResponseModel }
