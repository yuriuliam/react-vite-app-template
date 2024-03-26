import {
  QueryClientProvider,
  QueryClient,
  useQueryClient as useReactQueryClient,
} from '@tanstack/react-query'

import { withProps } from '@/shared/hocs/withProps'

const createQueryClient: App.Domain.ReactQuery.CreateQueryClientFn = () => {
  const queryClient = new QueryClient()

  const QUERY_PROVIDER_NAME = 'Infra.ReactQuery.ContextProvider'

  const QueryProvider = withProps(QueryClientProvider, { client: queryClient })
  QueryProvider.displayName = QUERY_PROVIDER_NAME

  const useQueryClient = useReactQueryClient.bind(null, queryClient)

  return [queryClient, QueryProvider, useQueryClient]
}

export { createQueryClient }
