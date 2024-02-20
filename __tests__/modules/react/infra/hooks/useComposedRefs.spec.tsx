import React from 'react'

import { render, renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { useComposedRef } from '@/modules/react/infra/hooks/useComposedRef'

describe('composeRefs', () => {
  it('should return true', () => {
    const callback = vi.fn()

    const { result: refObj } = renderHook(() => React.useRef(null))
    const { result: refCb } = renderHook(() => React.useCallback(callback, []))
    const { result: composedRef } = renderHook(() =>
      useComposedRef(refObj.current, refCb.current),
    )

    render(<div ref={composedRef.current} />)

    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(refObj.current.current)
  })
})
