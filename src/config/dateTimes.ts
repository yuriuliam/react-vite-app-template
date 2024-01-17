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

export {
  INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
  INTL_DATE_TIME_LOGGER_OPTS,
  INTL_DATE_TIME_TIME_OPTS,
}
