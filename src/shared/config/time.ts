const SECOND_IN_MS = 1 * 1000
const MINUTE_IN_MS = 60 * SECOND_IN_MS
const HOUR_IN_MS = 60 * MINUTE_IN_MS
const DAY_IN_MS = 24 * HOUR_IN_MS
const WEEK_IN_MS = 7 * DAY_IN_MS
const MONTH_IN_MS = 30 * DAY_IN_MS
const QUARTER_IN_MS = 90 * DAY_IN_MS
const YEAR_IN_MS = 365 * DAY_IN_MS

const RELATIVE_TIME_FORMAT_UNITS = Object.freeze([
  'years',
  'quarters',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds',
] satisfies Intl.RelativeTimeFormatUnit[])

const TIME_IN_MS_BY_DESC_ORDER = Object.freeze([
  YEAR_IN_MS,
  QUARTER_IN_MS,
  MONTH_IN_MS,
  WEEK_IN_MS,
  DAY_IN_MS,
  HOUR_IN_MS,
  MINUTE_IN_MS,
  SECOND_IN_MS,
])

export {
  SECOND_IN_MS,
  MINUTE_IN_MS,
  HOUR_IN_MS,
  DAY_IN_MS,
  WEEK_IN_MS,
  MONTH_IN_MS,
  QUARTER_IN_MS,
  YEAR_IN_MS,
  RELATIVE_TIME_FORMAT_UNITS,
  TIME_IN_MS_BY_DESC_ORDER,
}
