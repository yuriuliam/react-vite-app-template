import type { Locale } from '../enums/Locale'

type DateTimeFormatterOptions = Intl.DateTimeFormatOptions

/**
 * Creates a formatter which receives a price number/bigint
 * and converts into an INTL-Standard Price String.
 */
const createDateTimeFormatter = (
  locale: Locale | Locale[],
  options: DateTimeFormatterOptions = {},
) => {
  const intlDateTimeFormat = new Intl.DateTimeFormat(locale, options)

  return intlDateTimeFormat.format.bind(
    intlDateTimeFormat,
  ) satisfies App.Domain.Intl.DateFormatter
}

export { createDateTimeFormatter }
