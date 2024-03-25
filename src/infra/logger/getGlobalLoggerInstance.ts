import { LoggerName } from '@/data/logger/enums/LoggerName'
import { createLoggerFactory } from '@/data/logger/subjects/createLoggerFactory'

import { formatToDetailedDateTime } from '../intl/formatToDetailedDateTime'

const getGlobalLoggerInstance = createLoggerFactory(
  formatToDetailedDateTime,
  LoggerName.Production,
)

export { getGlobalLoggerInstance }
