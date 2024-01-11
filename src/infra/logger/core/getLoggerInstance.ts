import { createLogger } from '@/data/logger/core/createLogger'

import { memoize } from '@/shared/utils/functions'

const LOGGER_NAME_DEV = 'dev'

const getLoggerInstance = memoize((...subNamespaces: string[]) => {
  return createLogger(LOGGER_NAME_DEV, ...subNamespaces)
})

export { getLoggerInstance }
