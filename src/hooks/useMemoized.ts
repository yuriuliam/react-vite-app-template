import React from 'react'

import { memoize } from '@/utils/functions'

/**
 * Memoizes the return value of a given callback based on their parameters.
 */
const useMemoized = <T extends (...args: any[]) => any>(callback: T | null) => {
  const callbackRef = React.useRef<T | null>(null)
  const cacheRef = React.useRef(new Map())

  React.useLayoutEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return React.useMemo(
    () =>
      memoize(
        (...args: any[]) => callbackRef.current?.(...args) as T,
        cacheRef.current,
      ),
    [],
  )
}

export { useMemoized }
