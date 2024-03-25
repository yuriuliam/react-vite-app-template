import { memoize } from '@/shared/utils/functions'

import { createLogger } from '../core/createLogger'

const createLoggerFactory = (
  formatTime: App.Domain.Intl.DateFormatter,
  baseNamespace: string,
) =>
  memoize<App.Domain.Logger.LoggerFactoryFn>(
    createLogger.bind(null, formatTime, baseNamespace),
  )

export { createLoggerFactory }
