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

    expect(callback.mock.calls).toHaveLength(1)
    expect(callback.mock.calls[0][1]).toBe('mount')

    act(() => {
      forceUpdate.current()
    })

    expect(callback.mock.calls).toHaveLength(2)
    expect(callback.mock.calls[1][1]).toBe('update')
  })
})
