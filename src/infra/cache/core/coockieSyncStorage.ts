import { StoragePrefix } from '@/config/cache'

import { createCookieParser } from '@/data/cache/core/createCookieParser'
import { createSyncStorage } from '@/data/cache/core/createSyncStorage'

const cookieParser = createCookieParser()

const cookieSyncStorage = createSyncStorage(
  {
    getItem: key => cookieParser.get(key) ?? null,
    setItem: (key, value) => void cookieParser.set(key, value),
    removeItem: key => {
      cookieParser.remove(key)
    },
  },
  StoragePrefix.Cookies,
)

export { cookieSyncStorage }
