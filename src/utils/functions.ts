import {
  ASYNC_FUNCTION_PROTOTYPE,
  ASYNC_GENERATOR_FUNCTION_PROTOTYPE,
  FUNCTION_PROTOTYPE,
  GENERATOR_FUNCTION_PROTOTYPE,
} from './constants'

type MemoizeOptions<T extends (...args: any[]) => any> = {
  /** An optional External Cache to keep the return values */
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
  recompute: (...args: Parameters<T>) => ReturnType<T>
}

const argsReplacer = (_k: string, v: any) => {
  if (v instanceof Set) return Array.from(v)

  if (v instanceof Map) return Object.fromEntries(v.entries())

  return v
}

/**
 * Check if value is an async function.
 */
const isAsyncFunction = (value: any): value is AppUtils.AsyncFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_FUNCTION_PROTOTYPE

/**
 * Check if value is an async generator function.
 */
const isAsyncGeneratorFunction = (
  value: any,
): value is AppUtils.AsyncGeneratorFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_GENERATOR_FUNCTION_PROTOTYPE

/**
 * Check if value is a normal function. It will return false if function is
 * an `async`, `async generator` or `generator` type.
 *
 * If you just need to assert it's type, use `isFunctionType`
 * or `typeof value === 'function'`
 */
const isFunction = (value: any): value is AppUtils.FunctionLike =>
  isFunctionType(value) && Object.getPrototypeOf(value) === FUNCTION_PROTOTYPE

/**
 * Checks if value type is a function, regardless of the type.
 */
const isFunctionType = (value: any): value is AppUtils.FunctionLike =>
  typeof value === 'function'

/**
 * Check if value is a generator function.
 */
const isGeneratorFunction = (
  value: any,
): value is AppUtils.GeneratorFunctionLike =>
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
  const { cache = new Map<string, any>(), ttl = 0 } = options ?? {}

  const memoized: MemoizedFn<T> = (...args) => {
    const paramsKey = JSON.stringify(args, argsReplacer)

    if (cache.has(paramsKey)) return cache.get(paramsKey)

    const result = method(...args)
    cache.set(paramsKey, result)

    if (ttl > 0) setTimeout(() => cache.delete(paramsKey), ttl)

    return result
  }
  memoized.clear = cache.clear.bind(cache)
  memoized.recompute = (...args) => {
    const paramsKey = JSON.stringify(args, argsReplacer)

    const result = method(...args)
    cache.set(paramsKey, result)

    if (ttl > 0) setTimeout(() => cache.delete(paramsKey), ttl)

    return result
  }

  return memoized
}

export {
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isFunctionType,
  isGeneratorFunction,
  memoize,
}
