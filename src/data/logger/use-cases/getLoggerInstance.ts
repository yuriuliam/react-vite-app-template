import { formatToDetailedDateTime } from '@/data/intl/use-cases/formatToDetailedDateTime'

import { LoggerName } from '@/domain/logger/enums/LoggerName'

import { createLogger } from '@/infra/logger/use-cases/createLogger'

import { memoize } from '@/shared/utils/functions'

const getLoggerInstance = memoize(
  createLogger.bind(null, {
    baseNamespace: LoggerName.Development,
    formatTime: formatToDetailedDateTime,
  }),
)

export { getLoggerInstance }
