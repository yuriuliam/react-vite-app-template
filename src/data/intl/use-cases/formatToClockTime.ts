import { DEFAULT_APP_LOCALE } from '@/infra/intl/config/locale'
import { createDateTimeFormatter } from '@/infra/intl/use-cases/createDateTimeFormatter'

/**
 *
 */
const formatToClockTime = createDateTimeFormatter(DEFAULT_APP_LOCALE, {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

export { formatToClockTime }
