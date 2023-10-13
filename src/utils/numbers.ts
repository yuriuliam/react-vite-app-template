import { INTL_PERCENTAGE_OPTS, INTL_PRICE_OPTS } from './constants'

type FormattedNumber = string

type Currency = string
type FormattedPrice = FormattedNumber

type IFormatPercentage = (
  value: number,
  locale?: AppUtils.Locale,
  maxFractionDigits?: number,
) => FormattedNumber

type IFormatPrice = (
  value: number,
  locale?: AppUtils.Locale,
  currency?: Currency,
) => FormattedPrice

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
 *
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
