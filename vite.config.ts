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
          faker: ['@faker-js/faker'], // 2,568.80 kB (https://fakerjs.dev/guide/usage.html#browser)
          icons: ['@radix-ui/react-icons'], // 406.21 kB
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  worker: { format: 'iife' },
})
