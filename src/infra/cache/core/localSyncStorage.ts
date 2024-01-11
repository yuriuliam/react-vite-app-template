import { createSyncStorage } from '@/data/cache/createSyncStorage'

const localSyncStorage = createSyncStorage(
  window.localStorage,
  import.meta.env.VITE_LOCAL_STORAGE_ADAPTER_PREFIX,
)

export { localSyncStorage }
