import { StoragePrefix } from '@/config/cache'

import { createSyncStorage } from '@/data/cache/core/createSyncStorage'

const localSyncStorage = createSyncStorage(
  window.localStorage,
  StoragePrefix.Local,
)

export { localSyncStorage }
