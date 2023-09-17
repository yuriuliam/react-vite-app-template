import {
  INTL_DATETIME_HOUR_MINUTE_CYCLE_OPTS,
  INTL_DATETIME_LOGGER_OPTS,
  INTL_DATETIME_TIME_OPTS,
} from './constants'

type Timestamp = number
type FormattedDateTime = string

type IFormatDateTimeFn = (
  value?: Date | Timestamp,
  locale?: Utils.Locale,
) => FormattedDateTime

/**
 *
 */
const formatToHour: IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATETIME_HOUR_MINUTE_CYCLE_OPTS,
  }).format(date)

/**
 *
 */
const formatToLogger: IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATETIME_LOGGER_OPTS,
  }).format(date)

/**
 *
 */
const formatToTime: IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATETIME_TIME_OPTS,
  }).format(date)

export { formatToHour, formatToLogger, formatToTime }
