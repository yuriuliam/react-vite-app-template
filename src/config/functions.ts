/**
 * A placeholder function with no operations
 */
const NOOP: any = () => {}

/**
 * Async Function Prototype Reference
 */
const ASYNC_FUNCTION_PROTOTYPE = Object.getPrototypeOf(async function () {})

/**
 * Async Generator Function Prototype Reference
 */
const ASYNC_GENERATOR_FUNCTION_PROTOTYPE = Object.getPrototypeOf(
  async function* () {},
)

/**
 * Function Prototype Reference
 */
const FUNCTION_PROTOTYPE = Object.getPrototypeOf(function () {})

/**
 * Generator Function Prototype Reference
 */
const GENERATOR_FUNCTION_PROTOTYPE = Object.getPrototypeOf(function* () {})

export {
  ASYNC_FUNCTION_PROTOTYPE,
  ASYNC_GENERATOR_FUNCTION_PROTOTYPE,
  FUNCTION_PROTOTYPE,
  GENERATOR_FUNCTION_PROTOTYPE,
  NOOP,
}
