import { isFunction } from './functions'

/**
 * Defers a value into a promise, which will be resolved after a given number
 * of milliseconds.
 */
const debounced = async <T>(value: T, ms: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, ms)
  }) as T

/**
 * Puts the value into a Promise. It can receives an Initializer function
 * as well.
 *
 * Optionally can receive an Error object, forcing the promise to be rejected.
 */
const promised = async <T>(init: T | Utils.InitFn<T>) => {
  const value = isFunction(init) ? init() : init

  return await (value instanceof Error
    ? Promise.reject(value)
    : Promise.resolve(value))
}

/**
 * A wrapper to create promise function out of non-async ones.
 */
const promisify = <T extends FunctionUtils.FunctionLike>(callback: T) =>
  (async (...args: Parameters<T>) =>
    await Promise.resolve(
      callback(...args),
    )) as FunctionUtils.PromisifiedFunction<T>

/**
 * Creates a promise which will only be resolved after a given amount
 * of milliseconds.
 */
const wait = async (ms: number) => {
  await new Promise(resolve => setTimeout(resolve, ms))
}

export { promised, debounced, promisify, wait }
