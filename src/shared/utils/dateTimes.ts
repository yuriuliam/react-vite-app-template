import {
  INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
  INTL_DATE_TIME_TIME_OPTS,
} from '@/config/dateTimes'

/**
 *
 */
const formatToHoursAndMinutes: App.IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
  }).format(date)

/**
 *
 */
const formatToTime: App.IFormatDateTimeFn = (date, locale = []) =>
  new Intl.DateTimeFormat(locale, {
    ...INTL_DATE_TIME_TIME_OPTS,
  }).format(date)

export { formatToHoursAndMinutes, formatToTime }
