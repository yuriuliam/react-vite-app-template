import { afterEach, vi } from 'vitest'

const createSyncStorageMock = <TValue>(
  cache: Map<string, string> = new Map(),
) => {
  const getItem = vi.fn(
    (key: string, initialValue: TValue) => cache.get(key) ?? initialValue,
  )

  const removeItem = vi.fn((key: string) => void cache.delete(key))

  const setItem = vi.fn((key: string, value: TValue) => {
    cache.set(key, JSON.stringify(value))
  })

  afterEach(() => {
    getItem.mockClear()
    removeItem.mockClear()
    setItem.mockClear()
  })

  return { getItem, removeItem, setItem } satisfies App.Infra.Cache.ISyncStorage
}

const spySyncStorage = (syncStorage: App.Infra.Cache.ISyncStorage) => {
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

export { createSyncStorageMock, spySyncStorage }
