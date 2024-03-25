import { createQueryClient } from '@/data/react-query/subjects/createQueryClient'

const [queryClient, QueryProvider, useQueryClient] = createQueryClient()

export { queryClient, QueryProvider, useQueryClient }
