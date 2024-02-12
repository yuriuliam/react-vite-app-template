import { LOCALE } from '@/config/app'
import {
  INTL_DATE_TIME_CLOCK_TIME_OPTS,
  INTL_DATE_TIME_DETAILED_OPTS,
  INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
} from '@/config/dateTimes'

import { createStringifyAdapter } from './strings'

const clockTimeFormat = new Intl.DateTimeFormat(LOCALE, {
  ...INTL_DATE_TIME_CLOCK_TIME_OPTS,
})

const detailedDateTimeFormat = new Intl.DateTimeFormat(LOCALE, {
  ...INTL_DATE_TIME_DETAILED_OPTS,
})

const hoursAndMinutesFormat = new Intl.DateTimeFormat(LOCALE, {
  ...INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
})

/**
 *
 */
const clockTime = createStringifyAdapter(
  clockTimeFormat.format.bind(clockTimeFormat),
)

/**
 *
 */
const detailedDateTime = createStringifyAdapter(
  detailedDateTimeFormat.format.bind(detailedDateTimeFormat),
)
/**
 *
 */
const hoursAndMinutes = createStringifyAdapter(
  hoursAndMinutesFormat.format.bind(hoursAndMinutesFormat),
)

export { clockTime, detailedDateTime, hoursAndMinutes }
