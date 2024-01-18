import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/containers/app'

import { logEnvironmentMeta } from '@/infra/environment/scripts/logEnvironmentMeta'
import { injectGlobalLogger } from '@/infra/logger/scripts/injectGlobalLogger'
import { logWebVitals } from '@/infra/web-vitals/scripts/logWebVitals'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@radix-ui/themes/styles.css'

injectGlobalLogger()
logEnvironmentMeta()
void logWebVitals()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
