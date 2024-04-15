import { formatToDetailedDateTime } from '@/infra/intl/formatToDetailedDateTime'

import { LoggerName } from '../data/enums/LoggerName'
import { createLoggerFactory } from '../data/subjects/createLoggerFactory'

const getGlobalLoggerInstance = createLoggerFactory(
  formatToDetailedDateTime,
  LoggerName.Production,
)

export { getGlobalLoggerInstance }
