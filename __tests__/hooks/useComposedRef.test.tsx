import React from 'react'

import { render, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { useComposedRef } from '@/hooks/useComposedRef'

describe('useComposedRef', () => {
  it('should compose ref objects', () => {
    const callback = vi.fn()

    const { result: refObj } = renderHook(() =>
      React.useRef<HTMLDivElement>(null),
    )

    const { result: refCb } = renderHook(() => React.useCallback(callback, []))

    expect(refObj.current.current).toBe(null)
    expect(refCb.current).toBeTypeOf('function')

    const { result: composedRef } = renderHook(() =>
      useComposedRef(refObj.current, refCb.current),
    )

    render(<div ref={composedRef.current}></div>)

    expect(refObj.current).not.toBe(null)

    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(refObj.current.current)
  })

  it('should ignore null values', () => {
    const { result: refObj } = renderHook(() =>
      React.useRef<HTMLDivElement>(null),
    )

    const { result: composedRef } = renderHook(() =>
      useComposedRef(refObj.current, null),
    )

    expect(refObj.current.current).toBe(null)

    render(<div ref={composedRef.current}></div>)

    expect(refObj.current.current).not.toBe(null)
  })
})
