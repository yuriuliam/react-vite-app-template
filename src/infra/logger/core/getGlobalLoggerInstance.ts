import { LOGGER_NAME_PROD } from '@/config/logger'

import { createLogger } from '@/data/logger/core/createLogger'

import { detailedDateTime } from '@/infra/dateTimes/core/detailedDateTime'
import { loggerEventHandler } from '@/infra/logger/events/loggerEventHandler'

import { memoize } from '@/shared/utils/functions'

const getGlobalLoggerInstance = memoize(
  createLogger.bind(null, {
    baseNamespace: LOGGER_NAME_PROD,
    eventHandler: loggerEventHandler,
    formatTime: detailedDateTime.parse,
  }),
)

export { getGlobalLoggerInstance }
