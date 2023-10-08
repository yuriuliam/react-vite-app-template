import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'

import '@/scripts/globalLogger'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@radix-ui/themes/styles.css'

if (import.meta.env.DEV) {
  globalThis.logger.log({
    name: 'App',
    title: 'Vite',
    content: 'DEV Environment detected',
    data: { meta: import.meta },
    style: 'inline',
  })
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
