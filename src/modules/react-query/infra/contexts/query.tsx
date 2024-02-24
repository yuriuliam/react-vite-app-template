import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { withProps } from '@/modules/react/infra/hocs/withProps'

const queryClient = new QueryClient()

const QUERY_PROVIDER_NAME = 'Modules.ReactQuery.Provider'

const QueryProvider = withProps(QueryClientProvider, { client: queryClient })
QueryProvider.displayName = QUERY_PROVIDER_NAME

export { QueryProvider }
