import { isDevelopmentMode } from '@/data/environment/subjects/isDevelopmentMode'

import { formatToDetailedDateTime } from '@/infra/intl/formatToDetailedDateTime'

import { createGlobalLoggerInjector } from '../../data/subjects/createGlobalLoggerInjector'

const injectGlobalLogger = createGlobalLoggerInjector(
  formatToDetailedDateTime,
  isDevelopmentMode(),
)

export { injectGlobalLogger }
