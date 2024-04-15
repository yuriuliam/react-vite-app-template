import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/containers/app'

import { logEnvironmentMeta } from '@/infra/environment/scripts/logEnvironmentMeta'
import { reportWebVitals } from '@/infra/web-vitals/scripts/reportWebVitals'

import { injectGlobalLogger } from '@/modules/logging/infra/scripts/injectGlobalLogger'

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
