import { DEFAULT_APP_LOCALE } from '../config/locale'
import { type LocaleTag } from '../enums/LocaleTag'

const createRelativeTimeFormatter: App.Domain.Intl.CreateRelativeTimeFormatterFn<
  LocaleTag
> = (locale = DEFAULT_APP_LOCALE, options = {}) => {
  const intlRelativeTimeFormat = new Intl.RelativeTimeFormat(locale, options)

  return intlRelativeTimeFormat.format.bind(intlRelativeTimeFormat)
}

export { createRelativeTimeFormatter }
