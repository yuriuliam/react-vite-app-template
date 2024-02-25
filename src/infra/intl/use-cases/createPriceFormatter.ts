import type { Currency } from '../enums/Currency'
import type { Locale } from '../enums/Locale'

type PriceFormatterOptions = Omit<
  Intl.NumberFormatOptions,
  'style' | 'currency' | 'unit' | 'unitDisplay' | 'style'
>

/**
 * Creates a formatter which receives a price number/bigint
 * and converts into an INTL-Standard Price String.
 */
const createPriceFormatter = (
  locale: Locale | Locale[],
  currency: Currency,
  options: PriceFormatterOptions = {},
) => {
  const intlCurrencyFormat = new Intl.NumberFormat(locale, {
    ...options,
    style: 'currency',
    currency,
  })

  return intlCurrencyFormat.format.bind(intlCurrencyFormat)
}

export { createPriceFormatter }
