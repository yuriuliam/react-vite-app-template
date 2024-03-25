import { DEFAULT_APP_LOCALE } from '../config/locale'
import { type LocaleTag } from '../enums/LocaleTag'

/**
 * Creates a formatter which receives a percentage number/bigint
 * and converts into an INTL-Standard Percentage String.
 *
 * ### Reference:
 * - `0.3852` will be `38,52%`;
 * - `0.64` will be `64,00%`;
 * - `1.00` will be `100,00%`;
 */
const createPercentageFormatter: App.Domain.Intl.CreatePercentageFormatterFn<
  LocaleTag
> = (locale = DEFAULT_APP_LOCALE, options = {}) => {
  const intlPercentageFormat = new Intl.NumberFormat(locale, {
    ...options,
    style: 'percent',
  })

  return intlPercentageFormat.format.bind(intlPercentageFormat)
}

export { createPercentageFormatter }
