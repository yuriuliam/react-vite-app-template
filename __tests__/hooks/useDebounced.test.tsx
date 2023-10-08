import React from 'react'

import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useDebounced } from '@/hooks/useDebounced'

import { wait } from '@/utils/promises'

describe('useDebounced', () => {
  it('should return a debounced value from a React.useState', async () => {
    const { result: state } = renderHook(() => React.useState('hello world'))

    const { result: debouncedValue } = renderHook(() =>
      useDebounced(state.current[0], 25),
    )

    expect(debouncedValue.current).toBe(state.current[0])

    act(() => {
      const [, setValue] = state.current
      setValue('foo bar')
    })

    expect(debouncedValue.current).not.toBe(state.current[0])

    await wait(100)

    expect(debouncedValue.current).toBe(state.current[0])
  })
})
