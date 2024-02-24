import { describe, it, expect } from 'vitest'

import { isDevelopmentMode } from '@/data/environment/use-cases/isDevelopmentMode'

describe('isDevelopmentMode', () => {
  it('should return false when environment mode is not the same', () => {
    const result = isDevelopmentMode()

    expect(result).toBe(false)
  })
})
