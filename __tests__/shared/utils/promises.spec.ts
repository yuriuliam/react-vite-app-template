import { describe, it, expect } from 'vitest'

import { isAsyncFunction } from '@/shared/utils/functions'
import { deferred, promised, promisify, wait } from '@/shared/utils/promises'

describe('deferred', () => {
  it('should return a promise', () => {
    expect(deferred('test!', 50)).instanceOf(Promise)
  })

  it('should be able to defer a value with a given ms', async () => {
    await expect(deferred(10, 50)).resolves.toBe(10)
  })

  it('should resolve a deferred promise within the given time', async () => {
    const oldNow = Date.now()
    const time = 100

    await deferred(null, time)

    const now = Date.now()

    expect(now - oldNow).toBeGreaterThan(time)
  })
})

describe('promised', () => {
  it('should return a promise', () => {
    expect(promised('test!')).instanceOf(Promise)
  })

  it('should be able to put values into promise', async () => {
    const value = Symbol.for('test')

    await expect(promised(value)).resolves.toBe(value)
  })

  it('should be able to accept init functions', async () => {
    const value = 321892
    const init = () => value

    await expect(promised(init)).resolves.toBe(value)
  })
})

describe('promisify', () => {
  it('should be able to create async functions', () => {
    const myFunction = () => 10

    const myAsyncFunction = promisify(myFunction)

    expect(isAsyncFunction(myAsyncFunction)).toBeTruthy()
  })

  it('should act as an async function', async () => {
    const myAsyncFunction = promisify(() => 20)

    await expect(myAsyncFunction()).resolves.toBe(20)
  })
})

describe('wait', () => {
  it('should be awaited once called', async () => {
    const oldNow = Date.now()
    const time = 100

    await wait(100)

    const now = Date.now()

    expect(now - oldNow).toBeGreaterThanOrEqual(time)
  })
})
