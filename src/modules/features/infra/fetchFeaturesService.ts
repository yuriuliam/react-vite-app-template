import { mainHttpClient } from '@/infra/http/mainHttpClient'

import { createLoadFeaturesService } from '../data/subjects/createLoadFeaturesService'
import { featuresSchemaParser } from './featuresSchemaParser'

const fetchFeaturesService = createLoadFeaturesService(
  mainHttpClient,
  featuresSchemaParser,
)

export { fetchFeaturesService }
