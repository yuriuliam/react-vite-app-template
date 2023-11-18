import { vi } from 'vitest'

interface IStorageLike {
  clear: () => void
  getItem: (key: string) => string | null
  removeItem: (key: string) => void
  setItem: (key: string, value: string) => void
}

const createStorageMock = (cache: Map<string, string> = new Map()) => {
  const clear = vi.fn(cache.clear)

  const getItem = vi.fn((key: string) => cache.get(key) ?? null)

  const removeItem = vi.fn((key: string) => void cache.delete(key))

  const setItem = vi.fn(
    (key: string, value: string) => void cache.set(key, value),
  )

  return { clear, getItem, removeItem, setItem } satisfies IStorageLike
}

const spyStorage = (storage: IStorageLike) => ({
  clear: vi.spyOn(storage, 'clear'),
  getItem: vi.spyOn(storage, 'getItem'),
  removeItem: vi.spyOn(storage, 'removeItem'),
  setItem: vi.spyOn(storage, 'setItem'),
})

export { createStorageMock, spyStorage }
