import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useForceUpdate } from '@/modules/react/infra/hooks/useForceUpdate'

import { createProfilerWrapper } from '#/__mocks__/react/wrappers'

describe('useForceUpdate', () => {
  it('should render a memoized callback', () => {
    const id = 'force-update'
    const onRender = vi.fn()

    const { result: forceUpdate } = renderHook(() => useForceUpdate(), {
      wrapper: createProfilerWrapper(id, onRender),
    })

    expect(onRender).toBeCalledTimes(1)
    expect(onRender.mock.calls.at(0)).toHaveProperty('0', id)
    expect(onRender.mock.calls.at(0)).toHaveProperty('1', 'mount')

    act(() => {
      forceUpdate.current()
    })

    expect(onRender).toBeCalledTimes(2)
    expect(onRender.mock.calls.at(1)).toHaveProperty('0', id)
    expect(onRender.mock.calls.at(1)).toHaveProperty('1', 'update')
  })
})
