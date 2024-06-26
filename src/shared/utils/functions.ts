import {
  ASYNC_FUNCTION_PROTOTYPE,
  ASYNC_GENERATOR_FUNCTION_PROTOTYPE,
  FUNCTION_PROTOTYPE,
  GENERATOR_FUNCTION_PROTOTYPE,
} from '../config/functions'
import { standardArgsReplacer } from './json'

type DebouncedFn<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void

type MemoizeOptions<T extends (...args: any[]) => any> = {
  /** An optional External Cache to keep the return values. */
  cache?: Map<string, ReturnType<T>> | undefined
  /**
   * Time-to-live of the memoized value (in milliseconds).
   * Values equal or less than 0 will not trigger this feature.
   *
   * Default is `0`.
   */
  ttl?: number | undefined
}

type MemoizedFn<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => ReturnType<T>) & {
  clear: () => void
  pure: T
  recompute: (...args: Parameters<T>) => ReturnType<T>
}

/**
 * Compose callbacks into a single function.
 */
const composed = <T extends (...args: any[]) => void>(...callbacks: T[]) => {
  return ((...args) => {
    callbacks.forEach(callback => {
      callback(...args)
    })
  }) as T
}

/**
 * Debounces a callback by using setTimeout. It returns a function expression
 * which runs the callback after a given amount of milliseconds once called.
 *
 * It can receive arguments as well, but won't return nothing and will cancel
 * the last timeout when called more than once if not expired.
 */
const debounced = <T extends (...args: any[]) => void>(
  callback: T,
  ms: number,
) => {
  let curTimeout: NodeJS.Timeout | null = null

  return ((...args: Parameters<T>) => {
    if (curTimeout) clearTimeout(curTimeout)

    curTimeout = setTimeout(callback, ms, ...args)
  }) as DebouncedFn<T>
}

/**
 * Check if value is an async function.
 */
const isAsyncFunction = (value: any): value is App.AsyncFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_FUNCTION_PROTOTYPE

/**
 * Check if value is an async generator function.
 */
const isAsyncGeneratorFunction = (
  value: any,
): value is App.AsyncGeneratorFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_GENERATOR_FUNCTION_PROTOTYPE

/**
 * Check if value is a normal function. It will return false if function is
 * an `async`, `async generator` or `generator` type.
 *
 * If you just need to assert it's type, use `isFunctionType`
 * or `typeof myValue === 'function'`
 */
const isFunction = (value: any): value is App.FunctionLike =>
  isFunctionType(value) && Object.getPrototypeOf(value) === FUNCTION_PROTOTYPE

/**
 * Checks if value type is a function, regardless of the type.
 */
const isFunctionType = (value: any): value is App.FunctionLike =>
  typeof value === 'function'

/**
 * Check if value is a generator function.
 */
const isGeneratorFunction = (value: any): value is App.GeneratorFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === GENERATOR_FUNCTION_PROTOTYPE

/**
 * Memoizes a function declaration, quite useful for expensive methods return
 * a value without needing to process.
 *
 * It can optionally receives an external cache. in order to control the values.
 *
 * It returns the memoized callback with a clear method bounded into it, making
 * it possible to clear it's cache.
 */
const memoize = <T extends (...args: any[]) => any>(
  method: T,
  options?: Partial<MemoizeOptions<T>>,
) => {
  const { cache = new Map(), ttl = 0 } = options ?? {}

  const callMethod = (shouldRecompute: boolean, ...args: Parameters<T>) => {
    const paramsKey = JSON.stringify(args, standardArgsReplacer)

    if (!shouldRecompute && cache.has(paramsKey)) return cache.get(paramsKey)

    const result = method(...args)
    cache.set(paramsKey, result)

    if (ttl > 0) setTimeout(cache.delete.bind(cache), ttl, paramsKey)

    return result
  }

  const memoized = callMethod.bind(null, false) as MemoizedFn<T>
  memoized.clear = Map.prototype.clear.bind(cache)
  memoized.pure = method
  memoized.recompute = callMethod.bind(null, true)

  return memoized
}

export {
  composed,
  debounced,
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isFunctionType,
  isGeneratorFunction,
  memoize,
}
export type { MemoizeOptions }
