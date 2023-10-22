import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useIsOnline } from '@/hooks/useIsOnline'

import {
  createEventEmitterMock,
  mockEventListenerImplementation,
} from '#/__mocks__/utils'

describe('useIsOnline', () => {
  it('should match current navigator status', () => {
    const eventEmitter = createEventEmitterMock()
    const navigatorMock = { onLine: false }

    vi.stubGlobal('navigator', navigatorMock)

    const windowMock = mockEventListenerImplementation(window, eventEmitter)

    const { result: isOnline } = renderHook(() => useIsOnline())

    expect(isOnline.current).toBe(false)
    expect(isOnline.current).toBe(navigator.onLine)

    expect(windowMock.addEventListener).toBeCalledTimes(2)
    expect(windowMock.removeEventListener).toBeCalledTimes(0)

    act(() => {
      navigatorMock.onLine = true
      eventEmitter.dispatchEvent('online')
    })

    expect(isOnline.current).toBe(true)
    expect(isOnline.current).toBe(navigator.onLine)

    expect(windowMock.addEventListener).toBeCalledTimes(4)
    expect(windowMock.removeEventListener).toBeCalledTimes(2)
  })
})
