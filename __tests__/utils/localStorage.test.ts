import { describe, it, expect, vi } from 'vitest'

import {
  asAppLocalStorageKey,
  getLocalStorageValue,
} from '@/utils/localStorage'

describe('asAppLocalStorageKey', () => {
  it('should prefix the keys correctly', () => {
    const myKey = asAppLocalStorageKey('test')

    expect(myKey).toBe('@App:test')
  })
})

describe('getLocalStorageValue', () => {
  it('should retrieve values as expected', () => {
    const parse = vi.fn(value => {
      if (value === 'null') return null

      return value
    })

    vi.stubGlobal('JSON', { parse })

    const myKey = 'test'
    const value = 'foo bar'

    expect(getLocalStorageValue(myKey)).toBe(null)

    window.localStorage.setItem(myKey, value)

    expect(getLocalStorageValue(myKey)).toBe('foo bar')
  })
})
