import { mainHttpClient } from '@/infra/http/mainHttpClient'

import { createLoadFeaturesService } from '../data/subjects/createLoadFeaturesService'
import { featuresSchemaParser } from './featuresSchemaParser'

const fetchFeatures = createLoadFeaturesService(
  mainHttpClient,
  featuresSchemaParser,
)

export { fetchFeatures }
