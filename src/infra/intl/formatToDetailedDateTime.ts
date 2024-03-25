import { createDateTimeFormatter } from '@/data/intl/subjects/createDateTimeFormatter'

/**
 *
 */
const formatToDetailedDateTime = createDateTimeFormatter(undefined, {
  hour12: true,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'long',
})

export { formatToDetailedDateTime }
