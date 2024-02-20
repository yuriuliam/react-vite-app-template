import React from 'react'

import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useConst } from '@/modules/react/infra/hooks/useConst'

describe('useConst', () => {
  it('should render a memoized callback', () => {
    const { rerender: rerenderConst, result: dateValueConst } = renderHook(() =>
      useConst(Date.now()),
    )

    const { rerender: rerenderRef, result: dateValueRef } = renderHook(() =>
      React.useRef(Date.now()),
    )

    const firstDate = dateValueConst.current

    act(() => {
      rerenderConst()
      rerenderRef()
    })

    const [finalDateConst, finalDateRef] = [
      dateValueConst.current,
      dateValueRef.current.current,
    ]

    expect(finalDateRef).not.toBe(finalDateConst)

    expect(finalDateConst).toBe(firstDate)
    expect(finalDateRef).not.toBe(firstDate)
  })
})
