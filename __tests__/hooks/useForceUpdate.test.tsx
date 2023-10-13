import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useForceUpdate } from '@/hooks/useForceUpdate'

import { createProfilerWrapper } from '#/wrappers'

describe('useForceUpdate', () => {
  it('should return a given value', () => {
    const mockId = 'useForceUpdate'
    const callback = vi.fn()

    const { result: forceUpdate } = renderHook(() => useForceUpdate(), {
      wrapper: createProfilerWrapper(mockId, callback),
    })

    const callbackCalls = callback.mock.calls

    expect(callbackCalls).toHaveLength(1)
    expect(callbackCalls.at(0).at(1)).toBe('mount')

    act(() => {
      forceUpdate.current()
    })

    expect(callbackCalls).toHaveLength(2)
    expect(callbackCalls.at(1).at(1)).toBe('update')
  })
})
