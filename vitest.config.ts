/* eslint-disable import/no-default-export */
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    benchmark: {
      include: ['__tests__/**/*.bench.*'],
      exclude: ['node_modules'],
    },
    coverage: {
      provider: 'v8',
      extension: ['.ts', '.tsx'],
      exclude: [
        'node_modules',
        '.storybook/**/*',
        '__tests__/**/*',
        'src/@types/**/*',
        'src/config/**/*',
        'src/**/scripts/**/*',
        'src/main.tsx',
      ],
    },
    exclude: ['__tests__/**/*.bench.*', 'node_modules'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./__tests__/setup.ts'],
    onConsoleLog: (_, type) => (type === 'stderr' ? false : undefined),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#': fileURLToPath(new URL('./__tests__', import.meta.url)),
    },
  },
})
