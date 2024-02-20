import React from 'react'

import { useDebouncedCallback } from './useDebouncedCallback'

/**
 * Debounces a value for a given amount of milliseconds.
 */
const useDebouncedValue = <T>(value: T, ms: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState<T | undefined>(
    undefined,
  )

  const update = useDebouncedCallback(setDebouncedValue, ms)

  React.useEffect(() => {
    update(value)
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  return debouncedValue
}

export { useDebouncedValue }
