import { mainHttpClient } from '@/data/http/use-cases/mainHttpClient'

import { createLoadFeaturesService } from '../../infra/use-cases/createLoadFeaturesService'
import { featuresSchemaParser } from './featuresSchemaParser'

const fetchFeatures = createLoadFeaturesService(
  mainHttpClient,
  featuresSchemaParser,
)

export { fetchFeatures }
