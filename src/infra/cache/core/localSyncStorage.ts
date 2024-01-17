import { LOCAL_STORAGE_PREFIX } from '@/config/cache'

import { createSyncStorage } from '@/data/cache/createSyncStorage'

const localSyncStorage = createSyncStorage(
  window.localStorage,
  LOCAL_STORAGE_PREFIX,
)

export { localSyncStorage }
