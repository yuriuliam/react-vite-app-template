const INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS = Object.freeze({
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
} satisfies Intl.DateTimeFormatOptions)

const INTL_DATE_TIME_DETAILED_OPTS = Object.freeze({
  hour12: true,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'long',
} satisfies Intl.DateTimeFormatOptions)

const INTL_DATE_TIME_CLOCK_TIME_OPTS = Object.freeze({
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
} satisfies Intl.DateTimeFormatOptions)

export {
  INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
  INTL_DATE_TIME_DETAILED_OPTS,
  INTL_DATE_TIME_CLOCK_TIME_OPTS,
}
