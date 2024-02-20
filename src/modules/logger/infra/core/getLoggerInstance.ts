import { LoggerName } from '@/config/logger'

import { createLogger } from '@/modules/logger/data/core/createLogger'

import { detailedDateTime } from '@/shared/utils/dateTimes'
import { memoize } from '@/shared/utils/functions'

const getLoggerInstance = memoize(
  createLogger.bind(null, {
    baseNamespace: LoggerName.Development,
    formatTime: detailedDateTime.parse,
  }),
)

export { getLoggerInstance }
