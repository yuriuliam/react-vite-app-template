const INTL_PERCENTAGE_OPTS = Object.freeze<Intl.NumberFormatOptions>({
  style: 'percent',
})

const INTL_PRICE_OPTS = Object.freeze<Intl.NumberFormatOptions>({
  style: 'currency',
  currency: 'USD',
})

/**
 * Clamps a value based on given minimum and maximum values.
 */
const clamp = (
  value: number,
  min: number | undefined = Number.MIN_SAFE_INTEGER,
  max: number | undefined = Number.MAX_SAFE_INTEGER,
) => Math.max(min, Math.min(max, value))

/**
 * Returns the difference between given values.
 */
const diff = (numA: number, numB: number) => Math.abs(numA - numB)

/**
 * Formats a given percentage value into a INTL-Standard Percentage String.
 *
 * For reference:
 * - `0.3852` will be `38,52%`;
 * - `0.64` will be `64,00%`;
 * - `1.00` will be `100,00%`;
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
 * Default currency is `USD`.
 */
const formatPrice = (
  price: number,
  locale: App.Locale = [],
  currency: string = 'USD',
) =>
  new Intl.NumberFormat(locale, { ...INTL_PRICE_OPTS, currency }).format(price)

/**
 * Checks if a given number is between a minimum and a maximum.
 */
const isBetween = (value: number, min: number, max: number) =>
  value >= min && value <= max

/**
 * Checks if value is a non-NaN number.
 */
const isNumber = (value: any): value is number =>
  typeof value === 'number' && !Number.isNaN(value)

const isValueInRange = (value: number, min: number, max: number) =>
  isNumber(value) && value >= min && value <= max

export {
  clamp,
  diff,
  formatPercentage,
  formatPrice,
  isBetween,
  isNumber,
  isValueInRange,
}
