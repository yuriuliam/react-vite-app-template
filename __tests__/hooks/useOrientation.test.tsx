import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useOrientation } from '@/hooks/useOrientation'

describe('useOrientation', () => {
  it('should match current navigator online status', () => {
    const screenOrientationMock = {
      angle: 0,
      type: 'landscape-primary',
      unlock: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }

    vi.stubGlobal('screen', { orientation: screenOrientationMock })

    const { result: orientation } = renderHook(() => useOrientation())

    expect(orientation.current.type).toBe('landscape-primary')
    expect(screenOrientationMock.addEventListener).toBeCalledTimes(1)
    expect(screenOrientationMock.removeEventListener).toBeCalledTimes(0)
  })
})
