import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useDebouncedCallback } from '@/modules/react/infra/hooks/useDebouncedCallback'

describe('useDebouncedCallback', () => {
  it('should render a debounced callback', async () => {
    const callback = vi.fn()
    const args = ['hello', 'world!']

    const { result: debouncedCallback } = renderHook(() =>
      useDebouncedCallback(callback, 50),
    )

    act(() => {
      debouncedCallback.current(...args)
    })

    await waitFor(
      () => {
        expect(callback).toBeCalledTimes(1)
        expect(callback).toBeCalledWith(...args)
      },
      { interval: 10, timeout: 100 },
    )
  })
})
