import { formatToDetailedDateTime } from '@/infra/intl/formatToDetailedDateTime'

import { LoggerName } from '../data/enums/LoggerName'
import { createLoggerFactory } from '../data/subjects/createLoggerFactory'

const getLoggerInstance = createLoggerFactory(
  formatToDetailedDateTime,
  LoggerName.Development,
)

export { getLoggerInstance }
