import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useWindowScroll } from '@/hooks/useWindowScroll'

import {
  createEventEmitterMock,
  mockEventListenerImplementation,
} from '#/__mocks__/utils'

describe('useWindowScroll', () => {
  it('should match current scroll', () => {
    const eventEmitter = createEventEmitterMock()
    const windowMock = mockEventListenerImplementation(window, eventEmitter)

    const scrollXMock = vi.spyOn(window, 'scrollX', 'get')
    const scrollYMock = vi.spyOn(window, 'scrollY', 'get')

    scrollXMock.mockReturnValue(0)
    scrollYMock.mockReturnValue(0)

    const { result: windowScroll } = renderHook(() => useWindowScroll())

    expect(windowScroll.current).toEqual({ x: 0, y: 0 })
    expect(windowMock.addEventListener).toBeCalledTimes(1)
    expect(windowMock.removeEventListener).toBeCalledTimes(0)

    act(() => {
      scrollXMock.mockReturnValue(1200)
      scrollYMock.mockReturnValue(1500)
      eventEmitter.dispatchEvent('scroll')
    })

    expect(windowScroll.current).toEqual({ x: 1200, y: 1500 })
    expect(windowMock.addEventListener).toBeCalledTimes(2)
    expect(windowMock.removeEventListener).toBeCalledTimes(1)
  })
})
