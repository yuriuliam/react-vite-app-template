import { createDateTimeFormatter } from '@/data/intl/subjects/createDateTimeFormatter'

/**
 *
 */
const formatToClockTime = createDateTimeFormatter(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

export { formatToClockTime }
