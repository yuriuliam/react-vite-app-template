import { formatToDetailedDateTime } from '@/data/intl/use-cases/formatToDetailedDateTime'

import { LoggerName } from '@/domain/logger/enums/LoggerName'

import { createLoggerEventHandler } from '@/infra/logger/core/createLoggerEventHandler'
import { createLogger } from '@/infra/logger/use-cases/createLogger'

import { memoize } from '@/shared/utils/functions'

const getGlobalLoggerInstance = memoize(
  createLogger.bind(null, {
    baseNamespace: LoggerName.Production,
    eventHandler: createLoggerEventHandler(),
    formatTime: formatToDetailedDateTime,
  }),
)

export { getGlobalLoggerInstance }
