import React from 'react'
import ReactDOM from 'react-dom/client'

import { faker } from '@faker-js/faker'

import { App } from './App.tsx'

import '@/scripts/globalLogger'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@radix-ui/themes/styles.css'
import '@/styles/global.css'

if (import.meta.env.DEV) {
  globalThis.logger.log({
    name: 'App',
    title: 'Vite',
    content: 'DEV Environment detected',
    data: { meta: import.meta },
    style: 'inline',
  })

  faker.seed(753489)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
