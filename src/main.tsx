import React from 'react'
import ReactDOM from 'react-dom/client'

import { injectGlobalLogger } from './shared/scripts/injectGlobalLogger'
import { logEnvironmentMeta } from './shared/scripts/logEnvironmentMeta'
import { logWebVitals } from './shared/scripts/logWebVitals'

import { App } from '@/containers/app'

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
