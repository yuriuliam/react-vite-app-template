import React from 'react'

import { useRender } from './useRender'

import { debounced } from '@/utils/functions'

/**
 * Debounces a value for a given amount of milliseconds.
 * @param value
 * @param ms
 * @returns
 */
const useDebounced = <T>(value: T, ms: number) => {
  const [, rerender] = useRender()
  const valueRef = React.useRef(undefined as T)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const update = React.useCallback(
    debounced((newValue: T) => {
      valueRef.current = newValue
      rerender()
    }, ms),
    [],
  )

  React.useEffect(() => {
    update(value)
  }, [value, update])

  if (valueRef.current === undefined) {
    valueRef.current = value
  }

  return valueRef.current
}

export { useDebounced }
