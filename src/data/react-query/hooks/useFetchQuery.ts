import { useQuery } from '@tanstack/react-query'

const useFetchQuery = <TResult, TQueryFn extends () => TResult | null = any>(
  queryKey: any,
  queryFn: TQueryFn,
) => {
  const { data, isError } = useQuery({
    queryKey,
    queryFn,
    initialData: null,
  })

  return [data, isError] as const
}

export { useFetchQuery }
