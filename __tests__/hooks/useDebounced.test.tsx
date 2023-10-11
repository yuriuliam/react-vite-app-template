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

    expect(callback.mock.calls).toHaveLength(0)

    await vi.waitFor(
      () => {
        expect(callback.mock.calls).toHaveLength(1)
      },
      { interval: 25, timeout: 100 },
    )
  })
})
