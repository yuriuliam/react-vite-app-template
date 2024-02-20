import { StoragePrefix } from '@/config/cache'

import { createSyncStorage } from '@/modules/cache/data/core/createSyncStorage'

const localSyncStorage = createSyncStorage(
  window.localStorage,
  StoragePrefix.Local,
)

export { localSyncStorage }
