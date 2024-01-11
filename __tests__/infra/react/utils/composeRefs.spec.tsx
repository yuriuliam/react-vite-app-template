import React from 'react'

import { render, renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { composeRefs } from '@/infra/react/utils/composeRefs'

describe('composeRefs', () => {
  it('should return true', () => {
    const callback = vi.fn()

    const { result: refObj } = renderHook(() => React.useRef(null))
    const { result: refCb } = renderHook(() => React.useCallback(callback, []))

    const composedRef = composeRefs(refObj.current, refCb.current)

    render(<div ref={composedRef} />)

    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(refObj.current.current)
  })
})
