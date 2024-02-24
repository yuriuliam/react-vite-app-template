import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

describe('useCallbackRef', () => {
  it('should render a memoized callback', () => {
    const value = 'hello world!'
    const callback = vi.fn(() => value)

    const { result: callbackRef } = renderHook(() => useCallbackRef(callback))

    expect(callbackRef.current()).toBe(value)
    expect(callback).toBeCalledTimes(1)
  })
})
