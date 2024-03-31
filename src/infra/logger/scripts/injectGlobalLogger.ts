import { isDevelopmentMode } from '@/data/environment/subjects/isDevelopmentMode'
import { createGlobalLoggerInjector } from '@/data/logger/subjects/createGlobalLoggerInjector'

import { formatToDetailedDateTime } from '@/infra/intl/formatToDetailedDateTime'

const injectGlobalLogger = createGlobalLoggerInjector(
  formatToDetailedDateTime,
  isDevelopmentMode(),
)

export { injectGlobalLogger }
