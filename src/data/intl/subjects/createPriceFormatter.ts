import { DEFAULT_APP_CURRENCY } from '../config/currency'
import { DEFAULT_APP_LOCALE } from '../config/locale'
import { type Currency } from '../enums/Currency'
import { type LocaleTag } from '../enums/LocaleTag'

/**
 * Creates a formatter which receives a price number/bigint
 * and converts into an INTL-Standard Price String.
 */
const createPriceFormatter: App.Domain.Intl.CreatePriceFormatterFn<
  LocaleTag,
  Currency
> = (
  locale = DEFAULT_APP_LOCALE,
  currency = DEFAULT_APP_CURRENCY,
  options = {},
) => {
  const intlCurrencyFormat = new Intl.NumberFormat(locale, {
    ...options,
    style: 'currency',
    currency,
  })

  return intlCurrencyFormat.format.bind(intlCurrencyFormat)
}

export { createPriceFormatter }
