import { DEFAULT_APP_LOCALE } from '@/infra/intl/config/locale'
import { createDateTimeFormatter } from '@/infra/intl/use-cases/createDateTimeFormatter'

/**
 *
 */
const formatToDetailedDateTime = createDateTimeFormatter(DEFAULT_APP_LOCALE, {
  hour12: true,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'long',
})

export { formatToDetailedDateTime }
