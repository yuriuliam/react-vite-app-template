import { createJSONStorage } from 'jotai/utils'

const createSyncStorage = (
  baseStorage: App.Modules.Cache.IStorageLike,
  prefix?: string | null | undefined,
): App.Modules.Cache.ISyncStorage => {
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
  }))

  return storage
}

export { createSyncStorage }
