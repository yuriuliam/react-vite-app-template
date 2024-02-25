import { useAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

type AtomWithStorageFn = typeof atomWithStorage
type AtomWithStorageParams = Parameters<AtomWithStorageFn>

const createSyncStorage = (
  baseStorage: App.Domain.Cache.IStorageLike,
  prefix?: string | null | undefined,
) => {
  const getStorageKey = (key: string) => (prefix ? `${prefix}:${key}` : key)

  const getItem = (key: string) => {
    const internalKey = getStorageKey(key)

    return baseStorage.getItem(internalKey)
  }

  const removeItem = (key: string) => {
    const internalKey = getStorageKey(key)

    baseStorage.removeItem(internalKey)
  }

  const setItem = (key: string, value: string) => {
    const internalKey = getStorageKey(key)

    baseStorage.setItem(internalKey, value)
  }

  const storage = createJSONStorage(() => ({
    getItem,
    removeItem,
    setItem,
  })) as App.Domain.Cache.ISyncStorage

  const createAtomWithStorage = <T>(
    storageKey: string,
    defaultValue: T,
    options?: AtomWithStorageParams[3] | undefined,
  ) => {
    const atom = atomWithStorage<T>(storageKey, defaultValue, storage, options)

    const useAtomWithStorage = () => useAtom(atom)

    return [atom, useAtomWithStorage] as const
  }

  return [storage, createAtomWithStorage] as const
}

export { createSyncStorage }
