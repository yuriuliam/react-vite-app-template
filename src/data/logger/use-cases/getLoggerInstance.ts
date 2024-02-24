import { LoggerName } from '@/domain/logger/enums/LoggerName'

import { createLogger } from '@/infra/logger/use-cases/createLogger'

import { detailedDateTime } from '@/shared/utils/dateTimes'
import { memoize } from '@/shared/utils/functions'

const getLoggerInstance = memoize(
  createLogger.bind(null, {
    baseNamespace: LoggerName.Development,
    formatTime: detailedDateTime.parse,
  }),
)

export { getLoggerInstance }
