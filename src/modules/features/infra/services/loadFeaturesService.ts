import { createLoadFeaturesService } from '../../data/services/createLoadFeaturesService'

import { mainHttpClient } from '@/infra/protocols/http/mainHttpClient'

const loadFeatures = createLoadFeaturesService(mainHttpClient)

export { loadFeatures }
