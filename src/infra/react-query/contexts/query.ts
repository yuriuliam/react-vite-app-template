import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { withProps } from '@/infra/react/hocs/withProps'

const queryClient = new QueryClient()

const QUERY_PROVIDER_NAME = 'Infra.ReactQuery.ContextProvider'

const QueryProvider = withProps(QueryClientProvider, { client: queryClient })
QueryProvider.displayName = QUERY_PROVIDER_NAME

export { QueryProvider }
