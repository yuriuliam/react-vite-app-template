import { type ReportCallback } from 'web-vitals'

declare global {
  declare namespace App.Domain.WebVitals {
    type ReportWebVitalsTriggerFn = () => void

    type CreateWebVitalsListenerFn = (
      listener: ReportCallback,
    ) => ReportWebVitalsTriggerFn
  }
}

export = global
