import { afterEach, vi } from 'vitest'

interface IStorageLike {
  clear: () => void
  getItem: (key: string) => string | null
  key: (index: number) => string | null
  removeItem: (key: string) => void
  setItem: (key: string, value: string) => void
  readonly length: number
}

const createWebStorageMock = (cache: Map<string, string> = new Map()) => {
  const clear = vi.fn(cache.clear.bind(cache))

  const getItem = vi.fn((key: string) => cache.get(key) ?? null)

  const removeItem = vi.fn((key: string) => void cache.delete(key))

  const setItem = vi.fn(
    (key: string, value: string) => void cache.set(key, value),
  )

  const key = vi.fn(
    (index: number) => Array.from(cache.keys()).at(index) ?? null,
  )

  const storageMock = {
    clear,
    getItem,
    key,
    removeItem,
    setItem,
    length: 0,
  } satisfies IStorageLike

  Reflect.defineProperty(storageMock, 'length', {
    get: () => cache.size,
    configurable: false,
  })

  afterEach(() => {
    clear.mockClear()
    getItem.mockClear()
    removeItem.mockClear()
    setItem.mockClear()
    key.mockClear()
  })

  return storageMock
}

const spySyncStorage = (syncStorage: App.Domain.Cache.ISyncStorage) => {
  const getItem = vi.spyOn(syncStorage, 'getItem')
  const removeItem = vi.spyOn(syncStorage, 'removeItem')
  const setItem = vi.spyOn(syncStorage, 'setItem')

  afterEach(() => {
    getItem.mockClear()
    removeItem.mockClear()
    setItem.mockClear()
  })

  return {
    getItem,
    removeItem,
    setItem,
  }
}

export { createWebStorageMock, spySyncStorage }
