import { type LocaleTag } from '@/domain/intl/enums/LocaleTag'

const useIntlLocale = (locale?: LocaleTag | string | undefined) => {
  return new Intl.Locale(locale ?? navigator.language)
}

export { useIntlLocale }
