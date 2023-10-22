import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useIsVisible } from '@/hooks/useIsVisible'

describe('useIsVisible', () => {
  it('should match current page visibility', () => {
    const { result: isVisible } = renderHook(() => useIsVisible())

    expect(isVisible.current).toBe(true)
  })
})
