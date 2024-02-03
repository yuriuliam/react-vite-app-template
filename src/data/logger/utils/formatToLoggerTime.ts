import { INTL_DATE_TIME_LOGGER_OPTS } from '@/config/dateTimes'

/**
 *
 */
const formatToLoggerTime: App.IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATE_TIME_LOGGER_OPTS,
  }).format(date)

export { formatToLoggerTime }
