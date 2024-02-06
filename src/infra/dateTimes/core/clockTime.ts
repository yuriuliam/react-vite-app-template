import { LOCALE } from '@/config/app'
import { INTL_DATE_TIME_CLOCK_TIME_OPTS } from '@/config/dateTimes'

import { createParser } from '@/data/utilities/core/createParser'

const dateTimeFormat = new Intl.DateTimeFormat(LOCALE, {
  ...INTL_DATE_TIME_CLOCK_TIME_OPTS,
})

/**
 *
 */
const clockTime = createParser(dateTimeFormat.format.bind(dateTimeFormat))

export { clockTime }
