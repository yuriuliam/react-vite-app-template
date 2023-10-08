import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useConst } from '@/hooks/useConst'

describe('useConst', () => {
  it('should return a given value', () => {
    const value = { hello: 'world' }

    const { result: constant } = renderHook(() => useConst(value))

    expect(constant.current).toBe(value)
  })

  it('should not change the value after rerenders', () => {
    const createValue = () => Date.now()

    const constant = renderHook(() => useConst(createValue))

    const value = constant.result.current

    constant.rerender()

    expect(value).toBe(constant.result.current)
  })
})
