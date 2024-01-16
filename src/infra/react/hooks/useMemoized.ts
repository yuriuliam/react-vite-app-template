import { useCallbackRef } from './useCallbackRef'
import { useConst } from './useConst'

import { memoize } from '@/shared/utils/functions'

/**
 * Memoizes the return value of a given callback based on their parameters.
 */
const useMemoized = <T extends (...args: any[]) => any>(
  callback: T,
  ttl = 0,
) => {
  const cache = useConst(new Map())

  return useCallbackRef(memoize(callback, { cache, ttl }))
}

export { useMemoized }
