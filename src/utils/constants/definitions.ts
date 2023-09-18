/**
 * A placeholder function with no operations
 */
const NOOP = () => {}

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

const INTL_DATETIME_HOUR_MINUTE_CYCLE_OPTS =
  Object.freeze<Intl.DateTimeFormatOptions>({
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

const INTL_DATETIME_LOGGER_OPTS = Object.freeze<Intl.DateTimeFormatOptions>({
  hour12: true,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'long',
})

const INTL_DATETIME_TIME_OPTS = Object.freeze<Intl.DateTimeFormatOptions>({
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const INTL_PERCENTAGE_OPTS = Object.freeze<Intl.NumberFormatOptions>({
  style: 'percent',
})

const INTL_PRICE_OPTS = Object.freeze<Intl.NumberFormatOptions>({
  style: 'currency',
  currency: 'USD',
})

/**
 * Object Prototype Reference
 */
const RECORD_PROTOTYPE = Object.getPrototypeOf({})

export {
  ASYNC_FUNCTION_PROTOTYPE,
  ASYNC_GENERATOR_FUNCTION_PROTOTYPE,
  FUNCTION_PROTOTYPE,
  GENERATOR_FUNCTION_PROTOTYPE,
  INTL_DATETIME_HOUR_MINUTE_CYCLE_OPTS,
  INTL_DATETIME_LOGGER_OPTS,
  INTL_DATETIME_TIME_OPTS,
  INTL_PERCENTAGE_OPTS,
  INTL_PRICE_OPTS,
  RECORD_PROTOTYPE,
  NOOP,
}
