import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { createEventEmitterMock } from '#/__mocks__/utils'

describe('useMediaQuery', () => {
  it('should match current navigator online status', () => {
    const eventEmitter = createEventEmitterMock()

    const matchMediaResult = {
      media: 'prefers-dark-mode',
      matches: true,
      onchange: null,
      ...eventEmitter,
    }

    const matchMediaMock = vi.fn(() => matchMediaResult)

    vi.stubGlobal('matchMedia', matchMediaMock)

    const query = '(prefers-color-scheme: light)'
    const { result: mediaQuery } = renderHook(() => useMediaQuery(query))

    expect(mediaQuery.current).toBe(true)
    expect(matchMediaResult.addEventListener).toBeCalledTimes(1)
    expect(matchMediaResult.removeEventListener).toBeCalledTimes(0)

    act(() => {
      matchMediaResult.matches = false
      matchMediaResult.dispatchEvent('change')
    })

    expect(mediaQuery.current).toBe(false)
    expect(matchMediaResult.addEventListener).toBeCalledTimes(2)
    expect(matchMediaResult.removeEventListener).toBeCalledTimes(1)
  })
})
