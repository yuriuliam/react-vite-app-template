import { DEFAULT_APP_LOCALE } from '@/infra/intl/config/locale'
import { createTimeDifferenceFormatter } from '@/infra/intl/use-cases/createTimeDifferenceFormatter'

const formatToStandardTimeDifference =
  createTimeDifferenceFormatter(DEFAULT_APP_LOCALE)

export { formatToStandardTimeDifference }
