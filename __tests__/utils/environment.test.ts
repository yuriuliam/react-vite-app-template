import { describe, it, expect } from 'vitest'

import { MODE } from '@/utils/constants'
import { isMode } from '@/utils/environment'

describe('isMode', () => {
  it('should return true for a matching mode', () => {
    const results = [
      isMode(MODE.DEVELOPMENT),
      isMode(MODE.PROD),
      isMode(MODE.TEST),
    ]

    expect(results.some(result => result)).toBeTruthy()
    expect(results.every(result => result)).toBeFalsy()

    const [isDev, isProd, isTest] = results

    expect(isDev).toBeFalsy()
    expect(isProd).toBeFalsy()
    expect(isTest).toBeTruthy()
  })
})
