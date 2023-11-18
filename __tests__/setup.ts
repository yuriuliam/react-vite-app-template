import { createStorageMock } from './__mocks__/protocols/cache/storage'

Reflect.set(window, 'localStorage', createStorageMock())
Reflect.set(window, 'sessionStorage', createStorageMock())
