import { type LocaleTag } from '@/domain/intl/enums/LocaleTag'

type RelativeTimeFormatterOptions = Intl.RelativeTimeFormatOptions

const createRelativeTimeFormatter = (
  locale: LocaleTag | LocaleTag[],
  options: RelativeTimeFormatterOptions = {},
) => {
  const intlRelativeTimeFormat = new Intl.RelativeTimeFormat(locale, options)

  return intlRelativeTimeFormat.format.bind(
    intlRelativeTimeFormat,
  ) satisfies App.Domain.Intl.RelativeTimeFormatter
}

export { createRelativeTimeFormatter }
