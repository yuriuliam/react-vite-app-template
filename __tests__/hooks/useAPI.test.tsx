import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useAPI } from '@/hooks/useAPI'

import { APIMain } from '@/services/api/main'

describe('useAPI', () => {
  it('should return an API instance', () => {
    const { result: api } = renderHook(() => useAPI())

    expect(api.current instanceof APIMain).toBeTruthy()
  })
})
