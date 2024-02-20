import { StoragePrefix } from '@/config/cache'

import { createCookieParser } from '@/modules/cache/data/core/createCookieParser'
import { createSyncStorage } from '@/modules/cache/data/core/createSyncStorage'

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
