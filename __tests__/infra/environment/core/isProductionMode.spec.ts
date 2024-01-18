import { describe, it, expect } from 'vitest'

import { isProductionMode } from '@/infra/environment/core/isProductionMode'

describe('isProductionMode', () => {
  it('should return false when environment mode is not the same', () => {
    const result = isProductionMode()

    expect(result).toBe(false)
  })
})
