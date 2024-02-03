import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

import { createStorageMock } from './__mocks__/cache/storage'

import '@testing-library/jest-dom/vitest'

// React Cleanup

afterEach(() => {
  cleanup()
})

// Setup Local Storage and Session Storage Mocks

Reflect.set(window, 'localStorage', createStorageMock())
Reflect.set(window, 'sessionStorage', createStorageMock())
