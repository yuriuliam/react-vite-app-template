import { useQuery } from '@tanstack/react-query'

import { useAuth } from '@/modules/auth/infra/contexts/auth/context'

import { fetchFeatures } from '../services/fetchFeaturesService'

const useFeaturesData = (consumerName: string) => {
  const finalConsumerName = `useFeaturesData(${consumerName})`

  const { token } = useAuth(finalConsumerName)

  const {
    data: featureList,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['feature-list', token],
    queryFn: fetchFeatures.bind(null, token),
    placeholderData: null,
  })

  return {
    featureList,
    isLoading,
    isFetching,
  }
}

export { useFeaturesData }
