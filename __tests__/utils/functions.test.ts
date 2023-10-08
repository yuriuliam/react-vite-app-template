import { describe, it, expect, vi } from 'vitest'

import {
  debounced,
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isFunctionType,
  isGeneratorFunction,
  memoize,
} from '@/utils/functions'
import { wait } from '@/utils/promises'

describe('debounced', () => {
  it('should debounce a given callback', async () => {
    const callback = vi.fn()
    const value = 'foo bar'

    const debouncedCallback = debounced(callback, 50)

    debouncedCallback(value)

    expect(callback.mock.calls).toHaveLength(0)

    await wait(50)

    const mockCalls = callback.mock.calls

    expect(mockCalls).toHaveLength(1)

    const mockCall = mockCalls.at(0)
    expect(mockCall).toEqual([value])
  })

  it('should run once, when called twice before timeout expires', async () => {
    const callback = vi.fn()

    const debouncedCallback = debounced(callback, 50)

    debouncedCallback('test 1')
    debouncedCallback('test 2')

    await wait(50)

    const mockCalls = callback.mock.calls

    expect(mockCalls).toHaveLength(1)

    const mockCall = mockCalls.at(0)
    expect(mockCall).toEqual(['test 2'])
  })
})

describe('isAsyncFunction', () => {
  it('should return true for async functions', () => {
    const asyncFn = async () => void 0

    expect(isAsyncFunction(asyncFn)).toBeTruthy()
  })

  it('should return false for non-async functions', () => {
    const fn = () => void 0
    function* genFn() {}
    async function* asyncGenFn() {}

    expect(isAsyncFunction(fn)).toBeFalsy()
    expect(isAsyncFunction(genFn)).toBeFalsy()
    expect(isAsyncFunction(asyncGenFn)).toBeFalsy()
  })
})

describe('isAsyncGeneratorFunction', () => {
  it('should return true for async gen functions', () => {
    async function* asyncGenFn() {}

    expect(isAsyncGeneratorFunction(asyncGenFn)).toBeTruthy()
  })

  it('should return false for non-async gen functions', () => {
    const fn = () => void 0
    const asyncFn = async () => void 0
    function* genFn() {}

    expect(isAsyncGeneratorFunction(fn)).toBeFalsy()
    expect(isAsyncGeneratorFunction(asyncFn)).toBeFalsy()
    expect(isAsyncGeneratorFunction(genFn)).toBeFalsy()
  })
})

describe('isFunction', () => {
  it('should return true for pure functions', () => {
    const fn = () => void 0

    expect(isFunction(fn)).toBeTruthy()
  })

  it('should return false for non-pure functions', () => {
    const asyncFn = async () => void 0
    function* genFn() {}
    async function* asyncGenFn() {}

    expect(isFunction(asyncFn)).toBeFalsy()
    expect(isFunction(genFn)).toBeFalsy()
    expect(isFunction(asyncGenFn)).toBeFalsy()
  })
})

describe('isFunctionType', () => {
  it('should return true for functions', () => {
    const fn = () => void 0
    const asyncFn = async () => void 0
    function* genFn() {}
    async function* asyncGenFn() {}

    expect(isFunctionType(fn)).toBeTruthy()
    expect(isFunctionType(asyncFn)).toBeTruthy()
    expect(isFunctionType(genFn)).toBeTruthy()
    expect(isFunctionType(asyncGenFn)).toBeTruthy()
  })

  it('should return false for non-functions', () => {
    expect(isFunctionType(Symbol.for('test'))).toBeFalsy()
    expect(isFunctionType('test')).toBeFalsy()
    expect(isFunctionType(true)).toBeFalsy()
    expect(isFunctionType(10)).toBeFalsy()
  })
})

describe('isGeneratorFunction', () => {
  it('should return true for gen functions', () => {
    function* genFn() {}

    expect(isGeneratorFunction(genFn)).toBeTruthy()
  })

  it('should return false for non-gen functions', () => {
    const fn = () => void 0
    const asyncFn = async () => void 0
    async function* asyncGenFn() {}

    expect(isGeneratorFunction(fn)).toBeFalsy()
    expect(isGeneratorFunction(asyncFn)).toBeFalsy()
    expect(isGeneratorFunction(asyncGenFn)).toBeFalsy()
  })
})

describe('memoize', () => {
  it('should memoize functions as expected', () => {
    const memoizedFn = memoize(() => Math.abs(Math.random() * 10))

    const valueA = memoizedFn()
    const valueB = memoizedFn()

    expect(valueA).toEqual(valueB)
  })

  it('should parse Set and Map arguments correctly', () => {
    const myCache = new Map<string, any>()
    const memoizedFn = memoize(
      (map: Map<any, any>, set: Set<any>) => [
        ...map.entries(),
        ...set.entries(),
      ],
      { cache: myCache },
    )

    const mapArg = new Map([['foo-map', 'bar-map']])

    const setArg = new Set(['foo-set', 'bar-set'])

    const expectedKey = '[{"foo-map":"bar-map"},["foo-set","bar-set"]]'

    void memoizedFn(mapArg, setArg)

    expect(myCache.has(expectedKey)).toBeTruthy()
  })

  it('should keep values on a cache', () => {
    const myCache = new Map<string, any>()
    const memoizedFn = memoize(() => 'foo', {
      cache: myCache,
    })

    const valueA = memoizedFn()

    expect(myCache.size).toBe(1)

    const result = Array.from(myCache.values()).at(0)

    expect(result).toBe(valueA)
    expect(result).toBe('foo')
  })

  it('should delete the cache once .clear is called', () => {
    const myCache = new Map<string, any>()
    const memoizedFn = memoize(() => 'foo', {
      cache: myCache,
    })

    memoizedFn()

    expect(myCache.size).toBe(1)

    memoizedFn.clear()

    expect(myCache.size).toBe(0)
  })

  it('should ignore the cache once called with .recompute', () => {
    const myCache = new Map<string, any>()
    const memoizedFn = memoize(() => Object.create(null), {
      cache: myCache,
    })

    const objA = memoizedFn()
    const objB = memoizedFn()

    expect(myCache.size).toBe(1)
    expect(objA).toBe(objB)

    const objC = memoizedFn.recompute()

    expect(objB).not.toBe(objC)

    const objD = memoizedFn()

    expect(objC).toBe(objD)
  })

  it('should respect ttl once set', async () => {
    const myCache = new Map<string, any>()
    const memoizedFn = memoize(() => 'foo', {
      cache: myCache,
      ttl: 50,
    })

    void memoizedFn()

    expect(myCache.size).toBe(1)

    await wait(50)

    expect(myCache.size).toBe(0)

    void memoizedFn.recompute()

    expect(myCache.size).toBe(1)

    await wait(50)

    expect(myCache.size).toBe(0)
  })
})
