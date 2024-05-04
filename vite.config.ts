/* eslint-disable import/no-default-export */
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // [Radix UI - Icons] ~400.00 kB (All Icons)
          icn: ['@radix-ui/react-icons'],
          // [Web Vitals] ~6.86 kB (just here to not affect app bundle)
          wbv: ['web-vitals'],
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
