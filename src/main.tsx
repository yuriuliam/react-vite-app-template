import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '@/containers/app'

import { logWebVitals } from '@/data/web-vitals/scripts/logWebVitals'

import { logEnvironmentMeta } from './data/environment/scripts/logEnvironmentMeta'
import { injectGlobalLogger } from './data/logger/scripts/injectGlobalLogger'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@radix-ui/themes/styles.css'

// Injections
injectGlobalLogger()

// Log Scripts
logEnvironmentMeta()
logWebVitals()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
