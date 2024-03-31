import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/containers/app'

import { logEnvironmentMeta } from '@/infra/environment/scripts/logEnvironmentMeta'
import { injectGlobalLogger } from '@/infra/logger/scripts/injectGlobalLogger'
import { reportWebVitals } from '@/infra/web-vitals/scripts/reportWebVitals'

// Injections
injectGlobalLogger()

// Log Scripts
logEnvironmentMeta()
reportWebVitals()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
