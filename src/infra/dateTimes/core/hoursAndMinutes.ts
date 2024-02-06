import { LOCALE } from '@/config/app'
import { INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS } from '@/config/dateTimes'

import { createParser } from '@/data/utilities/core/createParser'

const dateTimeFormat = new Intl.DateTimeFormat(LOCALE, {
  ...INTL_DATE_TIME_HOUR_MINUTE_CYCLE_OPTS,
})

/**
 *
 */
const hoursAndMinutes = createParser(dateTimeFormat.format.bind(dateTimeFormat))

export { hoursAndMinutes }
