import { mainHttpClient } from '@/modules/http/infra/core/mainHttpClient'

import { createLoadFeaturesService } from '../../data/services/createLoadFeaturesService'
import { featuresSchemaParser } from './featuresSchema'

const loadFeatures = createLoadFeaturesService(
  mainHttpClient,
  featuresSchemaParser,
)

export { loadFeatures }
