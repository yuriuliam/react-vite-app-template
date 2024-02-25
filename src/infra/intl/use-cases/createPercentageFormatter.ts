import type { Locale } from '../enums/Locale'

type PercentageFormatterOptions = Omit<
  Intl.NumberFormatOptions,
  | 'currency'
  | 'currencyDisplay'
  | 'currencySign'
  | 'unit'
  | 'unitDisplay'
  | 'style'
>

/**
 * Creates a formatter which receives a percentage number/bigint
 * and converts into an INTL-Standard Percentage String.
 *
 * ### Reference:
 * - `0.3852` will be `38,52%`;
 * - `0.64` will be `64,00%`;
 * - `1.00` will be `100,00%`;
 */
const createPercentageFormatter = (
  locale: Locale | Locale[],
  options: PercentageFormatterOptions = {},
) => {
  const intlPercentageFormat = new Intl.NumberFormat(locale, {
    ...options,
    style: 'percent',
  })

  return intlPercentageFormat.format.bind(
    intlPercentageFormat,
  ) satisfies App.Domain.Intl.PercentageFormatter
}

export { createPercentageFormatter }
