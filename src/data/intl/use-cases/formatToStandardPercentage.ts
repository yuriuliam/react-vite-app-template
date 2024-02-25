import { DEFAULT_APP_LOCALE } from '@/infra/intl/config/locale'
import { createPercentageFormatter } from '@/infra/intl/use-cases/createPercentageFormatter'

const formatToStandardPercentage = createPercentageFormatter(
  DEFAULT_APP_LOCALE,
  {
    maximumFractionDigits: 2,
  },
)

export { formatToStandardPercentage }
