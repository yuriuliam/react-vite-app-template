import { useConst } from '@/infra/react/hooks/useConst'

import { loadFeatures } from '@/modules/features/infra/services/loadFeaturesService'

const useFeaturesServices = () =>
  useConst({
    loadFeatures,
  })

export { useFeaturesServices }
