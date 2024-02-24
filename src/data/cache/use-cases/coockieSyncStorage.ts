import { StoragePrefix } from '@/domain/cache/enums/StoragePrefix'

import { createCookieParser } from '@/infra/cache/use-cases/createCookieParser'
import { createSyncStorage } from '@/infra/cache/use-cases/createSyncStorage'

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
