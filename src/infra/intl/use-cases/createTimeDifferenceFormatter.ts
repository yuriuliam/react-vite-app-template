import { type LocaleTag } from '@/domain/intl/enums/LocaleTag'

import { getRelativeTimeByTimestamp } from '../utils/getRelativeTimeByTimestamp'

type TimeDifferenceFormatterOptions = Intl.RelativeTimeFormatOptions

const createTimeDifferenceFormatter = (
  locale: LocaleTag | LocaleTag[],
  options: TimeDifferenceFormatterOptions = {},
) => {
  const intlRelativeTimeFormat = new Intl.RelativeTimeFormat(locale, options)

  return ((timestamp, now = Date.now()) =>
    intlRelativeTimeFormat.format(
      ...getRelativeTimeByTimestamp(timestamp, now),
    )) satisfies App.Domain.Intl.TimeDifferenceFormatter
}

export { createTimeDifferenceFormatter }
