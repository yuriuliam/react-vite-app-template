import { loadFeatures } from '@/modules/features/infra/services/loadFeaturesService'
import { useConst } from '@/modules/react/infra/hooks/useConst'

const useFeaturesServices = () =>
  useConst({
    loadFeatures,
  })

export { useFeaturesServices }
