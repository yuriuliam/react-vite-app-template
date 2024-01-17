import { SESSION_STORAGE_PREFIX } from '@/config/cache'

import { createSyncStorage } from '@/data/cache/createSyncStorage'

const sessionSyncStorage = createSyncStorage(
  window.sessionStorage,
  SESSION_STORAGE_PREFIX,
)

export { sessionSyncStorage }
