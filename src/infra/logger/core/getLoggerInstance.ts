import { LOGGER_NAME_DEV } from '@/config/logger'

import { createLogger } from '@/data/logger/core/createLogger'

import { memoize } from '@/shared/utils/functions'

const getLoggerInstance = memoize(
  createLogger.bind(null, { baseNamespace: LOGGER_NAME_DEV }),
)

export { getLoggerInstance }
