import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals'

const createWebVitalsListener: App.Domain.WebVitals.CreateWebVitalsListenerFn =
  listener => {
    return () => {
      onCLS(listener)
      onFCP(listener)
      onFID(listener)
      onINP(listener)
      onLCP(listener)
      onTTFB(listener)
    }
  }

export { createWebVitalsListener }
