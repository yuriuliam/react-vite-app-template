/* eslint-disable import/no-default-export */
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      extension: ['.ts', '.tsx'],
      exclude: [
        '**/services/**/*',
        '**/utils/constants/**/*',
        '**/utils/decorators/**/*',
        '**/utils/definitions',
      ],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./__tests__/setup.ts'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
