import {
  INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
  INTL_DATE_TIME_LOGGER_OPTS,
  INTL_DATE_TIME_TIME_OPTS,
} from '@/config/dateTimes'

type FormattedDateTime = string

type IFormatDateTimeFn = (
  value?: Date | App.Timestamp | undefined,
  locale?: App.Locale,
) => FormattedDateTime

/**
 *
 */
const formatToHoursAndMinutes: IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
  }).format(date)

/**
 *
 */
const formatToLoggerTime: IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATE_TIME_LOGGER_OPTS,
  }).format(date)

/**
 *
 */
const formatToTime: IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATE_TIME_TIME_OPTS,
  }).format(date)

export { formatToHoursAndMinutes, formatToLoggerTime, formatToTime }
