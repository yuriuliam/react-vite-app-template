import { createLoadFeaturesService } from '../../data/services/createLoadFeaturesService'

import { mainHttpClient } from '@/infra/http/mainHttpClient'

const loadFeatures = createLoadFeaturesService(mainHttpClient)

export { loadFeatures }
