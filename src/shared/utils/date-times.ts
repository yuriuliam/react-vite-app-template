type Timestamp = number
type FormattedDateTime = string

type IFormatDateTimeFn = (
  value?: Date | Timestamp | undefined,
  locale?: App.Locale,
) => FormattedDateTime

const INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS =
  Object.freeze<Intl.DateTimeFormatOptions>({
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

const INTL_DATE_TIME_LOGGER_OPTS = Object.freeze<Intl.DateTimeFormatOptions>({
  hour12: true,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'long',
})

const INTL_DATE_TIME_TIME_OPTS = Object.freeze<Intl.DateTimeFormatOptions>({
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

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
