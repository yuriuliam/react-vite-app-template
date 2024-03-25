import { DEFAULT_APP_LOCALE } from '../config/locale'
import { type LocaleTag } from '../enums/LocaleTag'

/**
 * Creates a formatter which receives a price number/bigint
 * and converts into an INTL-Standard Price String.
 */
const createDateTimeFormatter: App.Domain.Intl.CreateDateTimeFormatterFn<
  LocaleTag
> = (locale = DEFAULT_APP_LOCALE, options = {}) => {
  const intlDateTimeFormat = new Intl.DateTimeFormat(locale, options)

  return intlDateTimeFormat.format.bind(intlDateTimeFormat)
}

export { createDateTimeFormatter }
