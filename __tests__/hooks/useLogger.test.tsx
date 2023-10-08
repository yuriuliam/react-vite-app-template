import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useLogger } from '@/hooks/useLogger'

import { Logger } from '@/services/logger'

describe('useLogger', () => {
  it('should return a Logger instance', () => {
    const { result: logger } = renderHook(() => useLogger())

    expect(logger.current instanceof Logger).toBeTruthy()
  })
})
