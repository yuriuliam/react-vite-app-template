import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useToggle } from '@/hooks/useToggle'

describe('useToggle', () => {
  it('should toggle current value', () => {
    const { result: toggler } = renderHook(() => useToggle())

    expect(toggler.current.at(0)).toBe(false)

    act(() => {
      const [, toggleValue] = toggler.current
      toggleValue()
    })

    expect(toggler.current.at(0)).toBe(true)

    act(() => {
      const [, toggleValue] = toggler.current
      toggleValue(true)
    })

    expect(toggler.current.at(0)).toBe(true)
  })
})
