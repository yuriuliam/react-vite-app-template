import { type Currency } from '@/domain/intl/enums/Currency'
import { type LocaleTag } from '@/domain/intl/enums/LocaleTag'

type PriceFormatterOptions = Omit<
  Intl.NumberFormatOptions,
  'style' | 'currency' | 'unit' | 'unitDisplay' | 'style'
>

/**
 * Creates a formatter which receives a price number/bigint
 * and converts into an INTL-Standard Price String.
 */
const createPriceFormatter = (
  locale: LocaleTag | LocaleTag[],
  currency: Currency,
  options: PriceFormatterOptions = {},
) => {
  const intlCurrencyFormat = new Intl.NumberFormat(locale, {
    ...options,
    style: 'currency',
    currency,
  })

  return intlCurrencyFormat.format.bind(
    intlCurrencyFormat,
  ) satisfies App.Domain.Intl.PriceFormatter
}

export { createPriceFormatter }
