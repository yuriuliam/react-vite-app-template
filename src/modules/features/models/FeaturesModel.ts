import { z } from 'zod'

import { FeatureModel } from './FeatureModel'

const FeaturesModel = z.array(FeatureModel)

export { FeaturesModel }
