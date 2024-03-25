import { useAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import { type StoragePrefix } from '../enums/StoragePrefix'

const createSyncStorage: App.Domain.Cache.CreateSyncStorageFn<StoragePrefix> = (
  baseStorage,
  prefix,
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

  const createAtomWithStorage: App.Domain.Cache.CreateAtomWithStorageFn = (
    storageKey,
    defaultValue,
    options,
  ) => {
    const atom = atomWithStorage(storageKey, defaultValue, storage, options)

    const useAtomWithStorage = () => useAtom(atom)

    return [atom, useAtomWithStorage]
  }

  return [storage, createAtomWithStorage]
}

export { createSyncStorage }
