import { describe, it, expect } from 'vitest'

import { isProductionMode } from '@/data/environment/subjects/isProductionMode'

describe('isProductionMode', () => {
  it('should return false when environment mode is not the same', () => {
    const result = isProductionMode()

    expect(result).toBe(false)
  })
})
