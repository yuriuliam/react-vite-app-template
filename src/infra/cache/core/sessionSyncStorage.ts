import { StoragePrefix } from '@/config/cache'

import { createSyncStorage } from '@/data/cache/core/createSyncStorage'

const sessionSyncStorage = createSyncStorage(
  window.sessionStorage,
  StoragePrefix.Session,
)

export { sessionSyncStorage }
