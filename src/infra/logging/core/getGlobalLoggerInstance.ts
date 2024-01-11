import { createLogger } from '@/data/logging/createLogger'

import { memoize } from '@/shared/utils/functions'

const LOGGER_NAME_PROD = 'main'

const getGlobalLoggerInstance = memoize(
  createLogger.bind(null, LOGGER_NAME_PROD),
)

export { getGlobalLoggerInstance }
