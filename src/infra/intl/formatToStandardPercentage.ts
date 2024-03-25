import { createPercentageFormatter } from '@/data/intl/subjects/createPercentageFormatter'

const formatToStandardPercentage = createPercentageFormatter(undefined, {
  maximumFractionDigits: 2,
})

export { formatToStandardPercentage }
