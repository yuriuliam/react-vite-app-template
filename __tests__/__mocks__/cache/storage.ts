import { vi } from 'vitest'

interface IStorageLike {
  clear: () => void
  getItem: (key: string) => string | null
  key: (index: number) => string | null
  removeItem: (key: string) => void
  setItem: (key: string, value: string) => void
}

const createStorageMock = (cache: Map<string, string> = new Map()) => {
  const clear = vi.fn(cache.clear.bind(cache))

  const getItem = vi.fn((key: string) => cache.get(key) ?? null)

  const removeItem = vi.fn((key: string) => void cache.delete(key))

  const setItem = vi.fn(
    (key: string, value: string) => void cache.set(key, value),
  )

  const key = vi.fn(
    (index: number) => Array.from(cache.keys()).at(index) ?? null,
  )

  return { clear, getItem, key, removeItem, setItem } satisfies IStorageLike
}

export { createStorageMock }
