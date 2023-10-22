import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useCallbackRef } from '@/hooks/useCallbackRef'

describe('useCallbackRef', () => {
  it('should return a callback wrapper', () => {
    const callback = vi.fn()

    const { result: callbackRef } = renderHook(() => useCallbackRef(callback))

    expect(callback).toBeCalledTimes(0)

    act(() => {
      callbackRef.current('hello world!')
    })

    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith('hello world!')
  })

  it('the callback wrapper should be able to return a value', () => {
    const callback = vi.fn()

    const value = Date.now()
    callback.mockReturnValue(value)

    const { result: callbackRef } = renderHook(() => useCallbackRef(callback))

    const result = callbackRef.current()

    expect(result).toBe(value)
  })
})
