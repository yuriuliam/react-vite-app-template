import { vi } from 'vitest'

import { type ISyncStorage } from '@/data/protocols/cache/createSyncStorage'

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

  return { getItem, removeItem, setItem } satisfies ISyncStorage
}

const spySyncStorage = (syncStorage: ISyncStorage) => ({
  getItem: vi.spyOn(syncStorage, 'getItem'),
  removeItem: vi.spyOn(syncStorage, 'removeItem'),
  setItem: vi.spyOn(syncStorage, 'setItem'),
})

export { createSyncStorageMock, spySyncStorage }
