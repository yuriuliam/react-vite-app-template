import { isFunction } from './functions'

/**
 * Defers a value into a promise, which will be resolved after a given number
 * of milliseconds.
 */
const deferred = async <T>(value: T, ms: number) =>
  await new Promise<T>(resolve => void setTimeout(resolve, ms, value))

/**
 * Puts the value into a Promise. It can receives an Initializer function
 * as well.
 */
const promised = async <T>(init: T | App.InitFn<T>) =>
  await Promise.resolve(isFunction(init) ? init() : init)

/**
 * Creates a promise which will be resolved after a given amount
 * of milliseconds.
 */
const wait = async (ms: number) => {
  void (await new Promise(resolve => setTimeout(resolve, ms)))
}

export { promised, deferred, wait }
