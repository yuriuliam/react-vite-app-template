import { type QueryClient } from '@tanstack/react-query'

declare global {
  declare namespace App.Domain.ReactQuery {
    type QueryClientProviderProps = globalThis.React.ComponentProps<
      typeof QueryClientProvider
    >
    type QueryProviderProps = Omit<QueryClientProviderProps, 'client'>

    type CreateQueryClientFn = () => [
      client: QueryClient,
      Provider: globalThis.React.FC<QueryProviderProps>,
      () => QueryClient,
    ]
  }
}

export = global
