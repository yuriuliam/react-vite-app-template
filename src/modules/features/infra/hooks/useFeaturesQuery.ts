import { useFetchQuery } from '@/data/react-query/hooks/useFetchQuery'

import { useAuth } from '@/modules/auth/data/contexts/auth'

const useFeaturesQuery = <T>(
  consumerName: string,
  serviceFn: (token: string | null) => T,
) => {
  const { token } = useAuth(`useFeaturesData(${consumerName})`)

  return useFetchQuery<Awaited<T>>(
    ['feature-list', token],
    serviceFn.bind(null, token),
  )
}

export { useFeaturesQuery }
