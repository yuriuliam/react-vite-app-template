import React from 'react'

import { clamp } from '../utils/numbers'

type UseCountControls = {
  decrease: (amount?: number) => void
  increase: (amount?: number) => void
  set: (newValue: number) => void
}

type UseCountHook = (
  initialValue: number,
  min?: number | undefined,
  max?: number | undefined,
) => [length: number, controls: UseCountControls]

const useCount: UseCountHook = (
  initialValue,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
) => {
  const internalMin = Math.max(min, Number.MIN_SAFE_INTEGER)
  const internalMax = Math.min(max, Number.MAX_SAFE_INTEGER)
  const [count, setCount] = React.useState(initialValue)

  const decrease = React.useCallback(
    (amount = 1) => {
      setCount(prev =>
        clamp({ value: prev - amount, min: internalMin, max: internalMax }),
      )
    },
    [internalMin, internalMax],
  )

  const increase = React.useCallback(
    (amount = 1) => {
      setCount(prev =>
        clamp({ value: prev + amount, min: internalMin, max: internalMax }),
      )
    },
    [internalMin, internalMax],
  )

  const set = React.useCallback(
    (newValue: number) => {
      setCount(clamp({ value: newValue, min: internalMin, max: internalMax }))
    },
    [internalMin, internalMax],
  )

  const controls = Object.freeze<UseCountControls>({ decrease, increase, set })

  return [count, controls]
}

export { useCount }
