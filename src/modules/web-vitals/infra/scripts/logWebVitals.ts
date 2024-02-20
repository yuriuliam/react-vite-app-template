import {
  onCLS,
  onFCP,
  onFID,
  onINP,
  onLCP,
  onTTFB,
  type ReportCallback,
} from 'web-vitals'

import { isDevelopmentMode } from '@/modules/environment/infra/core/isDevelopmentMode'
import { getGlobalLoggerInstance } from '@/modules/logger/infra/core/getGlobalLoggerInstance'

const logWebVitals = () => {
  if (!isDevelopmentMode()) return

  const logger = getGlobalLoggerInstance('web-vitals')

  const logWebVital: ReportCallback = data => {
    logger.log({
      name: 'App',
      title: data.name,
      content: `Rating: ${data.rating}`,
      data,
      style: 'default',
    })
  }

  onCLS(logWebVital)
  onFCP(logWebVital)
  onFID(logWebVital)
  onINP(logWebVital)
  onLCP(logWebVital)
  onTTFB(logWebVital)
}

export { logWebVitals }
