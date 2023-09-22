import {
  ASYNC_FUNCTION_PROTOTYPE,
  ASYNC_GENERATOR_FUNCTION_PROTOTYPE,
  FUNCTION_PROTOTYPE,
  GENERATOR_FUNCTION_PROTOTYPE,
} from './constants'

type MemoizedFn<T extends (...args: any[]) => any> = ((
  ...args: Parameters<T>
) => ReturnType<T>) & {
  clear: () => void
}

const argsReplacer = (_k: string, v: any) => {
  if (v instanceof Set) return Array.from(v)

  if (v instanceof Object) return Object.entries(v)

  return v
}

/**
 * Check if value is an async function.
 */
const isAsyncFunction = (
  value: any,
): value is FunctionUtils.AsyncFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_FUNCTION_PROTOTYPE

/**
 * Check if value is an async generator function.
 */
const isAsyncGeneratorFunction = (
  value: any,
): value is FunctionUtils.AsyncGeneratorFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_GENERATOR_FUNCTION_PROTOTYPE

/**
 * Check if value is a normal function. It will return false if function is
 * an `async`, `async generator` or `generator` type.
 *
 * If you just need to assert the type of the value, use `isFunctionType`
 * or `typeof value === 'function'`
 */
const isFunction = (value: any): value is FunctionUtils.FunctionLike =>
  isFunctionType(value) && Object.getPrototypeOf(value) === FUNCTION_PROTOTYPE

/**
 * Checks if value type is a function, regardless of the type.
 */
const isFunctionType = (value: any): value is FunctionUtils.FunctionLike =>
  typeof value === 'function'

/**
 * Check if value is a generator function.
 */
const isGeneratorFunction = (
  value: any,
): value is FunctionUtils.GeneratorFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === GENERATOR_FUNCTION_PROTOTYPE

/**
 * Memoizes a function declaration.
 */
const memoize = <T extends (...args: any[]) => any>(
  method: T,
  cache = new Map<string, any>(),
) => {
  const memoized: MemoizedFn<T> = (...args) => {
    const paramsKey = JSON.stringify(args, argsReplacer)

    if (cache.has(paramsKey)) return cache.get(paramsKey)

    const result = method(...args)
    cache.set(paramsKey, result)

    return result
  }
  memoized.clear = cache.clear.bind(cache)

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
