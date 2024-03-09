import { formatToDetailedDateTime } from '@/data/intl/use-cases/formatToDetailedDateTime'

import { LoggerName } from '@/domain/logger/enums/LoggerName'

import { createLoggerFactory } from '@/infra/logger/use-cases/createLoggerFactory'

const getGlobalLoggerInstance = createLoggerFactory(
  formatToDetailedDateTime,
  LoggerName.Production,
)

export { getGlobalLoggerInstance }
