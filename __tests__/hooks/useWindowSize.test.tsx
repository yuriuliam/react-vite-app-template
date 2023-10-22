import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useWindowSize } from '@/hooks/useWindowSize'

import {
  createEventEmitterMock,
  mockEventListenerImplementation,
} from '#/__mocks__/utils'

describe('useWindowSize', () => {
  it('should match current window size', () => {
    const eventEmitter = createEventEmitterMock()
    const windowMock = mockEventListenerImplementation(window, eventEmitter)

    const innerWidthMock = vi.spyOn(window, 'innerWidth', 'get')
    const innerHeightMock = vi.spyOn(window, 'innerHeight', 'get')

    innerWidthMock.mockReturnValue(1920)
    innerHeightMock.mockReturnValue(1080)

    const { result: windowSize } = renderHook(() => useWindowSize())

    expect(windowSize.current).toEqual({ width: 1920, height: 1080 })
    expect(windowMock.addEventListener).toBeCalledTimes(1)
    expect(windowMock.removeEventListener).toBeCalledTimes(0)

    act(() => {
      innerWidthMock.mockReturnValue(2048)
      innerHeightMock.mockReturnValue(1080)
      eventEmitter.dispatchEvent('resize')
    })

    expect(windowSize.current).toEqual({ width: 2048, height: 1080 })
    expect(windowMock.addEventListener).toBeCalledTimes(2)
    expect(windowMock.removeEventListener).toBeCalledTimes(1)
  })
})
