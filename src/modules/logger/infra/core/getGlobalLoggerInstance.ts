import { LoggerName } from '@/config/logger'

import { createLogger } from '@/modules/logger/data/core/createLogger'
import { loggerEventHandler } from '@/modules/logger/infra/events/loggerEventHandler'

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
