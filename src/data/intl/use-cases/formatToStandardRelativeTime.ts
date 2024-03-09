import { DEFAULT_APP_LOCALE } from '@/infra/intl/config/locale'
import { createRelativeTimeFormatter } from '@/infra/intl/use-cases/createRelativeTimeFormatter'

const formatToStandardRelativeTime =
  createRelativeTimeFormatter(DEFAULT_APP_LOCALE)

export { formatToStandardRelativeTime }
