import { createSyncStorage } from '@/data/protocols/cache/createSyncStorage'

const sessionSyncStorage = createSyncStorage(
  window.sessionStorage,
  import.meta.env.VITE_SESSION_STORAGE_ADAPTER_PREFIX,
)

export { sessionSyncStorage }
