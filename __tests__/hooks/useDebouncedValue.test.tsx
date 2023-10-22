import React from 'react'

import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useDebouncedValue } from '@/hooks/useDebouncedValue'

describe('useDebouncedValue', () => {
  it('should return a debounced value from a React.useState', async () => {
    const { result: state } = renderHook(() => React.useState('hello world'))

    const { result: debouncedValue } = renderHook(() =>
      useDebouncedValue(state.current.at(0), 25),
    )

    expect(debouncedValue.current).toBe(state.current.at(0))

    act(() => {
      const [, setValue] = state.current

      setValue('foo bar')
    })

    expect(debouncedValue.current).not.toBe(state.current.at(0))

    await waitFor(
      () => {
        expect(debouncedValue.current).toBe(state.current.at(0))
      },
      { interval: 25, timeout: 100 },
    )
  })
})
