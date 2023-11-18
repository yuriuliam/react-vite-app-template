import { isFunction } from './functions'

/**
 * Defers a value into a promise, which will be resolved after a given number
 * of milliseconds.
 */
const deferred = async <T>(value: T, ms: number) =>
  await new Promise<T>(resolve => setTimeout(resolve, ms, value))

/**
 * Puts the value into a Promise. It can receives an Initializer function
 * as well.
 */
const promised = async <T>(init: T | App.Utils.InitFn<T>) =>
  await Promise.resolve(isFunction(init) ? init() : init)

/**
 * A wrapper to create a promise function out of non-async one.
 */
const promisify =
  <T extends App.Functions.FunctionLike>(callback: T) =>
  async (...args: Parameters<T>) =>
    (await Promise.resolve(await callback(...args))) as ReturnType<T>

/**
 * Creates a promise which will be resolved after a given amount
 * of milliseconds.
 */
const wait = async (ms: number) => {
  await new Promise(resolve => setTimeout(resolve, ms))
}

export { promised, deferred, promisify, wait }
