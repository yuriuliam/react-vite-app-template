import { LOCAL_STORAGE_PREFIX } from '@/config/constants'

import { createSyncStorage } from '@/data/cache/createSyncStorage'

const localSyncStorage = createSyncStorage(
  window.localStorage,
  LOCAL_STORAGE_PREFIX,
)

export { localSyncStorage }
