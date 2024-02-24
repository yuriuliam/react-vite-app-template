import { mainHttpClient } from '@/modules/http/infra/core/mainHttpClient'

import { createLoadFeaturesService } from '../../data/services/createLoadFeaturesService'
import { featuresSchemaParser } from './featuresSchema'

const fetchFeatures = createLoadFeaturesService(
  mainHttpClient,
  featuresSchemaParser,
)

export { fetchFeatures }
