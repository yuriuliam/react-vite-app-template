import { LoggerName } from '@/config/logger'

import { createLogger } from '@/data/logger/core/createLogger'

import { loggerEventHandler } from '@/infra/logger/events/loggerEventHandler'

import { detailedDateTime } from '@/shared/utils/dateTimes'
import { memoize } from '@/shared/utils/functions'

const getGlobalLoggerInstance = memoize(
  createLogger.bind(null, {
    baseNamespace: LoggerName.Production,
    eventHandler: loggerEventHandler,
    formatTime: detailedDateTime.parse,
  }),
)

export { getGlobalLoggerInstance }
