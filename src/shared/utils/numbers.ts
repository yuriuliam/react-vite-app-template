const INTL_PERCENTAGE_OPTS = Object.freeze<Intl.NumberFormatOptions>({
  style: 'percent',
})

const INTL_PRICE_OPTS = Object.freeze<Intl.NumberFormatOptions>({
  style: 'currency',
  currency: 'USD',
})

/**
 * Clamps a value based on given minimum and maximum values.
 *
 * @param value the value to be clamped.
 * @param min minimum value.
 * @param max maximum value.
 * @returns clamped number.
 */
const clamp = (
  value: number,
  min: number | undefined = Number.MIN_SAFE_INTEGER,
  max: number | undefined = Number.MAX_SAFE_INTEGER,
) => Math.max(min, Math.min(max, value))

/**
 * Formats a given percentage value into a INTL-Style Percentage String.
 *
 * If no locale is provided, assumed the current one.
 */
const formatPercentage = (
  percentage: number,
  locale: App.Locale = [],
  maxFractionDigits = 2,
) =>
  new Intl.NumberFormat(locale, {
    ...INTL_PERCENTAGE_OPTS,
    maximumFractionDigits: maxFractionDigits,
  }).format(percentage)

/**
 * Formats a given price value into a INTL-Style Price String.
 *
 * If no locale is provided, the current one is assumed.
 *
 * If no currency is provided, `USD` is assumed.
 */
const formatPrice = (
  price: number,
  locale: App.Locale = [],
  currency: string = 'USD',
) =>
  new Intl.NumberFormat(locale, { ...INTL_PRICE_OPTS, currency }).format(price)

/**
 * Checks if a given number is between a minimum and a maximum.
 * @param value The value to be checked.
 * @param min The minimum accepted.
 * @param max The maximum accepted.
 * @returns `true` if number respects `min` and `max`, otherwise `false`.
 */
const isBetween = (value: number, min: number, max: number) =>
  value >= min && value <= max

/**
 * Checks if value is a non-NaN number.
 */
const isNumber = (value: any): value is number =>
  typeof value === 'number' && !isNaN(value)

export { clamp, formatPercentage, formatPrice, isBetween, isNumber }
