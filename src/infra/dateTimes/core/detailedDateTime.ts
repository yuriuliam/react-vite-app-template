import { LOCALE } from '@/config/app'
import { INTL_DATE_TIME_DETAILED_OPTS } from '@/config/dateTimes'

import { createParser } from '@/data/utilities/core/createParser'

const dateTimeFormat = new Intl.DateTimeFormat(LOCALE, {
  ...INTL_DATE_TIME_DETAILED_OPTS,
})

/**
 *
 */
const detailedDateTime = createParser(
  dateTimeFormat.format.bind(dateTimeFormat),
)

export { detailedDateTime }
