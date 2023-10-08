import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useMemoized } from '@/hooks/useMemoized'

import { wait } from '@/utils/promises'

describe('useMemoized', () => {
  it('should memoize a callback return', () => {
    const callback = () => ({})

    const { result: memoizedCallback } = renderHook(() => useMemoized(callback))

    const value1 = memoizedCallback.current()
    const value2 = memoizedCallback.current()

    expect(value2).toBe(value1)
  })

  it('should respect a given ttl', async () => {
    const callback = () => Date.now()

    const { result: memoizedCallback } = renderHook(() =>
      useMemoized(callback, 25),
    )

    const value1 = memoizedCallback.current()

    await wait(100)

    const value2 = memoizedCallback.current()

    expect(value2).not.toBe(value1)
  })
})
