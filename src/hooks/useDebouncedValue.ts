import React from 'react'

import { useCallbackRef } from './useCallbackRef'
import { useForceUpdate } from './useForceUpdate'

import { debounced } from '@/utils/functions'

/**
 * Debounces a value for a given amount of milliseconds.
 * @param value
 * @param ms
 * @returns
 */
const useDebouncedValue = <T>(value: T, ms: number) => {
  const forceUpdate = useForceUpdate()
  const valueRef = React.useRef(undefined as T)

  const update = useCallbackRef(
    debounced((newValue: T) => {
      valueRef.current = newValue
      forceUpdate()
    }, ms),
  )

  React.useEffect(() => {
    update(value)
  }, [value, update])

  if (valueRef.current === undefined) {
    valueRef.current = value
  }

  return valueRef.current
}

export { useDebouncedValue }