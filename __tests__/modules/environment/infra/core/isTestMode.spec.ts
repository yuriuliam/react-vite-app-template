import { describe, it, expect } from 'vitest'

import { isTestMode } from '@/modules/environment/infra/core/isTestMode'

describe('isTestMode', () => {
  it('should return true for a matching mode', () => {
    const result = isTestMode()

    expect(result).toBe(true)
  })
})
