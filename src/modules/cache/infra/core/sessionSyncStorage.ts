import { StoragePrefix } from '@/config/cache'

import { createSyncStorage } from '@/modules/cache/data/core/createSyncStorage'

const sessionSyncStorage = createSyncStorage(
  window.sessionStorage,
  StoragePrefix.Session,
)

export { sessionSyncStorage }
