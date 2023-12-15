import {
  onCLS,
  onFCP,
  onFID,
  onINP,
  onLCP,
  onTTFB,
  type ReportCallback,
} from 'web-vitals'

import { isDevelopmentMode } from '../utils/environment'

import { createLogger } from '@/data/protocols/logger'

const logWebVitals = () => {
  if (!isDevelopmentMode()) return

  const logger = createLogger('web-vitals')

  const logWebVital: ReportCallback = data => {
    logger.log({
      name: 'App',
      title: data.name,
      content: `Logging received data | Rating: ${data.rating}`,
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
