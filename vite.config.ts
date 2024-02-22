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
          // [Radix UI - Icons] ~400.00 kB
          icn: ['@radix-ui/react-icons'],
          // [Lexical] ~134.39 kB
          lxc: [
            'lexical',
            '@lexical/react/LexicalComposer',
            '@lexical/react/LexicalContentEditable',
            '@lexical/react/LexicalErrorBoundary',
            '@lexical/react/LexicalHistoryPlugin',
            '@lexical/react/LexicalPlainTextPlugin',
          ],
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
  worker: { format: 'iife' },
})
