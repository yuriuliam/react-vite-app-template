import { describe, it, expect } from 'vitest'

import { isDevelopmentMode } from '@/infra/environment/core/isDevelopmentMode'

describe('isDevelopmentMode', () => {
  it('should return false when environment mode is not the same', () => {
    const result = isDevelopmentMode()

    expect(result).toBe(false)
  })
})
