type FormattedNumber = string

type Currency = string
type FormattedPrice = FormattedNumber

type IFormatPercentage = (
  value: number,
  locale?: App.Utils.Locale,
  maxFractionDigits?: number,
) => FormattedNumber

type IFormatPrice = (
  value: number,
  locale?: App.Utils.Locale,
  currency?: Currency,
) => FormattedPrice

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
 * Formats a number into a INTL Percentage value.
 * If no locale is provided, assumed the current one
 */
const formatPercentage: IFormatPercentage = (
  percentage,
  locale = [],
  maxFractionDigits = 2,
) =>
  new Intl.NumberFormat(locale, {
    ...INTL_PERCENTAGE_OPTS,
    maximumFractionDigits: maxFractionDigits,
  }).format(percentage)

/**
 *
 */
const formatPrice: IFormatPrice = (price, locale = [], currency = 'USD') =>
  new Intl.NumberFormat(locale, { ...INTL_PRICE_OPTS, currency }).format(price)

export { clamp, formatPercentage, formatPrice }
