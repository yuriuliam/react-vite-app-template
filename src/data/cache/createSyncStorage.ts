import { createJSONStorage } from 'jotai/utils'

const createSyncStorage = (
  baseStorage: Storage,
  prefix: string,
): App.Infra.Cache.ISyncStorage => {
  const getAppStorageKey = (key: string) => `${prefix}:${key}`

  const getItem = (key: string) => {
    const appKey = getAppStorageKey(key)

    return baseStorage.getItem(appKey)
  }

  const removeItem = (key: string) => {
    const appKey = getAppStorageKey(key)

    baseStorage.removeItem(appKey)
  }

  const setItem = (key: string, value: string) => {
    const appKey = getAppStorageKey(key)

    baseStorage.setItem(appKey, value)
  }

  const storage = createJSONStorage(() => ({
    getItem,
    removeItem,
    setItem,
  }))

  return storage
}

export { createSyncStorage }
