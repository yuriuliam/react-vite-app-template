import { createLogger } from '@/data/logger/core/createLogger'

import { memoize } from '@/shared/utils/functions'

const LOGGER_NAME_PROD = 'main'

const getGlobalLoggerInstance = memoize(
  createLogger.bind(null, LOGGER_NAME_PROD),
)

export { getGlobalLoggerInstance }
