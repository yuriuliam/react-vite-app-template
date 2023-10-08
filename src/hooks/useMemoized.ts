import React from 'react'

import { useCallbackRef } from './useCallbackRef'

import { memoize } from '@/utils/functions'

/**
 * Memoizes the return value of a given callback based on their parameters.
 */
const useMemoized = <T extends (...args: any[]) => any>(
  callback: T,
  ttl = 0,
) => {
  const cacheRef = React.useRef(new Map())

  return useCallbackRef(memoize(callback, { cache: cacheRef.current, ttl }))
}

export { useMemoized }
