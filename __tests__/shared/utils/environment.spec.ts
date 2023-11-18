import { describe, it, expect } from 'vitest'

import {
  isDevelopmentMode,
  isProductionMode,
  isTestMode,
} from '@/shared/utils/environment'

describe('isDevelopmentMode', () => {
  it('should return false when environment mode is not the same', () => {
    const result = isDevelopmentMode()

    expect(result).toBe(false)
  })
})

describe('isProductionMode', () => {
  it('should return false when environment mode is not the same', () => {
    const result = isProductionMode()

    expect(result).toBe(false)
  })
})

describe('isTestMode', () => {
  it('should return true for a matching mode', () => {
    const result = isTestMode()

    expect(result).toBe(true)
  })
})
