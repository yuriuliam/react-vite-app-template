import { DEFAULT_APP_LOCALE } from '../config/locale'
import { type LocaleTag } from '../enums/LocaleTag'
import { getRelativeTimeByTimestamp } from '../utils/getRelativeTimeByTimestamp'

const createTimeDifferenceFormatter: App.Domain.Intl.CreateTimeDifferenceFormatterFn<
  LocaleTag
> = (locale = DEFAULT_APP_LOCALE, options = {}) => {
  const intlRelativeTimeFormat = new Intl.RelativeTimeFormat(locale, options)

  return (timestamp, now = Date.now()) =>
    intlRelativeTimeFormat.format(...getRelativeTimeByTimestamp(timestamp, now))
}

export { createTimeDifferenceFormatter }
