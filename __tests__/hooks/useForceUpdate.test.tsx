import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useForceUpdate } from '@/hooks/useForceUpdate'

import { createProfilerWrapper } from '#/__mocks__/wrappers'

describe('useForceUpdate', () => {
  it('should return a given value', () => {
    const mockId = 'useForceUpdate'
    const callback = vi.fn()

    const { result: forceUpdate } = renderHook(() => useForceUpdate(), {
      wrapper: createProfilerWrapper(mockId, callback),
    })

    expect(callback).toBeCalledTimes(1)
    expect(callback.mock.calls.at(0).at(1)).toBe('mount')

    act(() => {
      forceUpdate.current()
    })

    expect(callback).toBeCalledTimes(2)
    expect(callback.mock.calls.at(1).at(1)).toBe('update')
  })
})
