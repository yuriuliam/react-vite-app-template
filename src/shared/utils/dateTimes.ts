import {
  INTL_DATE_TIME_CLOCK_TIME_OPTS,
  INTL_DATE_TIME_DETAILED_OPTS,
  INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
} from '@/config/dateTimes'
import { Locale } from '@/config/locale'

import { createStringifyAdapter } from './strings'

const createDateTimeFormatCallback = (
  config: Intl.DateTimeFormatOptions,
  locale: Locale,
) => {
  const dateTimeFormat = new Intl.DateTimeFormat(locale, { ...config })

  return dateTimeFormat.format.bind(dateTimeFormat)
}

const createClockTimeFormat = createDateTimeFormatCallback.bind(null, {
  ...INTL_DATE_TIME_CLOCK_TIME_OPTS,
})

const createDetailedDateTimeFormat = createDateTimeFormatCallback.bind(null, {
  ...INTL_DATE_TIME_DETAILED_OPTS,
})

const createHoursAndMinutesFormat = createDateTimeFormatCallback.bind(null, {
  ...INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
})

/**
 *
 */
const clockTime = createStringifyAdapter(
  createClockTimeFormat(Locale.UnitedStates),
)

/**
 *
 */
const detailedDateTime = createStringifyAdapter(
  createDetailedDateTimeFormat(Locale.UnitedStates),
)
/**
 *
 */
const hoursAndMinutes = createStringifyAdapter(
  createHoursAndMinutesFormat(Locale.UnitedStates),
)

export { clockTime, detailedDateTime, hoursAndMinutes }
