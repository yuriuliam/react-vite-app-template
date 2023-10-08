import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useRender } from '@/hooks/useRender'

describe('useRender', () => {
  it('should return a given value', () => {
    const { result: renderer } = renderHook(() => useRender())

    const oldRenderCount = renderer.current[0]

    expect(oldRenderCount).toBe(0)

    act(() => {
      const [, rerender] = renderer.current

      rerender()
    })

    expect(renderer.current[0]).toBe(1)
  })
})
