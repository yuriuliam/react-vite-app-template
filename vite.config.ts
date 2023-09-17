/* eslint-disable import/no-default-export */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import lightningcss from 'vite-plugin-lightningcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    lightningcss({
      browserslist: '>= 0.25%',
      minify: true,
      drafts: {
        customMedia: true,
        nesting: true,
      },
    }),
  ],
})
