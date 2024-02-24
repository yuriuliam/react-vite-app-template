import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

import { createWebStorageMock } from './data/cache/__mocks__/webStorage'

import '@testing-library/jest-dom/vitest'

// React Cleanup

afterEach(() => {
  cleanup()
})

// Setup Local Storage and Session Storage Mocks

Reflect.set(window, 'localStorage', createWebStorageMock())
Reflect.set(window, 'sessionStorage', createWebStorageMock())
