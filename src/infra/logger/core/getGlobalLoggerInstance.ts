import { LOGGER_NAME_PROD } from '@/config/logger'

import { createLogger } from '@/data/logger/core/createLogger'

import { loggerEventHandler } from '@/infra/event/loggerEventHandler'

import { memoize } from '@/shared/utils/functions'

const getGlobalLoggerInstance = memoize(
  createLogger.bind(null, {
    baseNamespace: LOGGER_NAME_PROD,
    eventHandler: loggerEventHandler,
  }),
)

export { getGlobalLoggerInstance }
