import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/containers/app'

import { logEnvironmentMeta } from '@/modules/environment/infra/scripts/logEnvironmentMeta'
import { injectGlobalLogger } from '@/modules/logger/infra/scripts/injectGlobalLogger'
import { logWebVitals } from '@/modules/web-vitals/infra/scripts/logWebVitals'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@radix-ui/themes/styles.css'

injectGlobalLogger()
logEnvironmentMeta()
logWebVitals()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
