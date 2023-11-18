import React from 'react'
import ReactDOM from 'react-dom/client'

import { injectGlobalLogger } from './shared/scripts/globalLogger'

import { App } from '@/containers/app'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@radix-ui/themes/styles.css'

injectGlobalLogger()

if (import.meta.env.DEV) {
  globalThis.logger.log({
    name: 'App',
    title: 'Vite',
    content: 'DEV Environment detected',
    data: { env: import.meta.env, url: import.meta.url },
    style: 'inline',
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
