import {
  ASYNC_FUNCTION_PROTOTYPE,
  ASYNC_GENERATOR_FUNCTION_PROTOTYPE,
  FUNCTION_PROTOTYPE,
  GENERATOR_FUNCTION_PROTOTYPE,
} from './constants'

/**
 * Check if value is an async function.
 */
const isAsyncFunction = (
  value: any,
): value is FunctionHelpers.AsyncFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_FUNCTION_PROTOTYPE

/**
 * Check if value is an async generator function.
 */
const isAsyncGeneratorFunction = (
  value: any,
): value is FunctionHelpers.AsyncGeneratorFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === ASYNC_GENERATOR_FUNCTION_PROTOTYPE

/**
 * Check if value is a normal function. It will return false if function is
 * `async`, `async generator` or `generator`
 */
const isFunction = (value: any): value is FunctionHelpers.FunctionLike =>
  isFunctionType(value) && Object.getPrototypeOf(value) === FUNCTION_PROTOTYPE

/**
 * Checks if value is a function of any type.
 */
const isFunctionType = (value: any): value is FunctionHelpers.FunctionLike =>
  typeof value === 'function'

/**
 * Check if value is a generator function.
 */
const isGeneratorFunction = (
  value: any,
): value is FunctionHelpers.GeneratorFunctionLike =>
  isFunctionType(value) &&
  Object.getPrototypeOf(value) === GENERATOR_FUNCTION_PROTOTYPE

export {
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isFunction,
  isFunctionType,
  isGeneratorFunction,
}
