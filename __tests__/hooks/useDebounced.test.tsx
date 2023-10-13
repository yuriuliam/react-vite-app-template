import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useDebounced } from '@/hooks/useDebounced'

describe('useDebounced', () => {
  it('should return a debounced value from a React.useState', async () => {
    const callback = vi.fn()
    const { result: debouncedFn } = renderHook(() => useDebounced(callback, 50))

    act(() => {
      debouncedFn.current()
    })

    const callbackCalls = callback.mock.calls

    expect(callbackCalls).toHaveLength(0)

    await vi.waitFor(
      () => {
        expect(callbackCalls).toHaveLength(1)
      },
      { interval: 25, timeout: 100 },
    )
  })
})
