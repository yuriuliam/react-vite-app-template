import { mainHttpClient } from '@/modules/http/infra/core/mainHttpClient'

import { createLoadFeaturesService } from '../../data/services/createLoadFeaturesService'
import { featuresSchema } from './featuresSchema'

const loadFeatures = createLoadFeaturesService(mainHttpClient, featuresSchema)

export { loadFeatures }
