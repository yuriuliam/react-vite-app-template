import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { usePreferredLanguage } from '@/hooks/usePreferredLanguage'

import {
  createEventEmitterMock,
  mockEventListenerImplementation,
} from '#/__mocks__/utils'

describe('usePreferredLanguage', () => {
  it('should match current navigator language', () => {
    const eventEmitter = createEventEmitterMock()
    const navigatorMock = { language: 'en-US' }

    vi.stubGlobal('navigator', navigatorMock)

    const windowMock = mockEventListenerImplementation(window, eventEmitter)

    const { result: language } = renderHook(() => usePreferredLanguage())

    expect(language.current).toBe('en-US')
    expect(windowMock.addEventListener).toBeCalledTimes(1)
    expect(windowMock.removeEventListener).toBeCalledTimes(0)

    act(() => {
      navigatorMock.language = 'en-GB'
      eventEmitter.dispatchEvent('languagechange')
    })

    expect(language.current).toBe('en-GB')
    expect(windowMock.addEventListener).toBeCalledTimes(2)
    expect(windowMock.removeEventListener).toBeCalledTimes(1)
  })
})
