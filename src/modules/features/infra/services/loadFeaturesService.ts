import { mainHttpClient } from '@/infra/http/mainHttpClient'

import { createLoadFeaturesService } from '../../data/services/createLoadFeaturesService'

const loadFeatures = createLoadFeaturesService(mainHttpClient)

export { loadFeatures }
