import { createDateTimeFormatter } from '@/data/intl/subjects/createDateTimeFormatter'

/**
 *
 */
const formatToHoursAndMinutesTime = createDateTimeFormatter(undefined, {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
})

export { formatToHoursAndMinutesTime }
