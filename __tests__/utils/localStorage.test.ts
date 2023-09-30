import { describe, it, expect } from 'vitest'

import { asAppLocalStorageKey } from '@/utils/localStorage'

describe('asAppLocalStorageKey', () => {
  it('should prefix the keys correctly', () => {
    const myKey = asAppLocalStorageKey('test')

    expect(myKey).toBe('@App:test')
  })
})
