import { createLogger } from '@/data/logger/core/createLogger'

import { isDevelopmentMode } from '@/infra/environment/core/isDevelopmentMode'

import type { ReportCallback } from 'web-vitals'

const logWebVitals = async () => {
  const { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } = await import(
    'web-vitals'
  )

  if (!isDevelopmentMode()) return

  const logger = createLogger('web-vitals')

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
