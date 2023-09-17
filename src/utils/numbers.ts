import { INTL_PERCENTAGE_OPTS, INTL_PRICE_OPTS } from './constants'

type FormattedNumber = string

type Currency = string
type FormattedPrice = FormattedNumber

type IFormatPercentage = (
  value: number,
  locale?: Utils.Locale,
  maxFractionDigits?: number,
) => FormattedNumber

type IFormatPrice = (
  value: number,
  locale?: Utils.Locale,
  currency?: Currency,
) => FormattedPrice

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

export { formatPercentage, formatPrice }
