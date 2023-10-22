import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useSet } from '@/hooks/useSet'

describe('useSet', () => {
  it('should be able to add values', () => {
    const { result: set } = renderHook(() => useSet())

    expect(set.current.size).toBe(0)

    act(() => {
      set.current.add('foo')
    })

    expect(set.current.size).toBe(1)
  })

  it('should be able to clear values', () => {
    const { result: set } = renderHook(() => useSet([1, 2, 3, 4, 5]))

    expect(set.current.size).toBe(5)

    act(() => {
      set.current.clear()
    })

    expect(set.current.size).toBe(0)
  })

  it('should be able to delete values', () => {
    const { result: set } = renderHook(() => useSet(['foo', 'bar']))

    expect(set.current.size).toBe(2)

    act(() => {
      set.current.delete('bar')
    })

    expect(set.current.size).toBe(1)
  })

  it('should be able to check if there are values present', () => {
    const { result: set } = renderHook(() => useSet(['foo', 'bar']))

    expect(set.current.has('foo')).toBe(true)
    expect(set.current.has('hello')).toBe(false)
  })

  it('should be able to iterate and do for-loops', () => {
    const { result: set } = renderHook(() => useSet(['foo', 'bar', 'hello']))

    expect(Array.from(set.current.entries())).toEqual([
      ['foo', 'foo'],
      ['bar', 'bar'],
      ['hello', 'hello'],
    ])

    expect(Array.from(set.current.keys())).toEqual(['foo', 'bar', 'hello'])

    expect(Array.from(set.current.values())).toEqual(['foo', 'bar', 'hello'])

    const callback = vi.fn()

    set.current.forEach(callback)

    expect(callback).toBeCalledTimes(3)
  })
})
