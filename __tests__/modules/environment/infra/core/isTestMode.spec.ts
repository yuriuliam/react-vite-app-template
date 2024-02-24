import { describe, it, expect } from 'vitest'

import { isTestMode } from '@/data/environment/use-cases/isTestMode'

describe('isTestMode', () => {
  it('should return true for a matching mode', () => {
    const result = isTestMode()

    expect(result).toBe(true)
  })
})
