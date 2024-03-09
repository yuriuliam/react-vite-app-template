import { formatToDetailedDateTime } from '@/data/intl/use-cases/formatToDetailedDateTime'

import { LoggerName } from '@/domain/logger/enums/LoggerName'

import { createLoggerFactory } from '@/infra/logger/use-cases/createLoggerFactory'

const getLoggerInstance = createLoggerFactory(
  formatToDetailedDateTime,
  LoggerName.Development,
)

export { getLoggerInstance }
