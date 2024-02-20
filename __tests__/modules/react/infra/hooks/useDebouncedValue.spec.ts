import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useDebouncedValue } from '@/modules/react/infra/hooks/useDebouncedValue'

describe('useDebouncedValue', () => {
  it('should render a debounced value', async () => {
    const { rerender, result: debouncedValue } = renderHook(
      ({ value }) => useDebouncedValue(value, 50),
      {
        initialProps: { value: 30 },
      },
    )

    expect(debouncedValue.current).toBe(undefined)

    act(() => {
      rerender({ value: 10 })
    })

    await waitFor(
      () => {
        expect(debouncedValue.current).toBe(10)
      },
      { interval: 25, timeout: 100 },
    )
  })
})
