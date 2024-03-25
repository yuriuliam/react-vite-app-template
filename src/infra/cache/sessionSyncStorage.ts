import { StoragePrefix } from '@/data/cache/enums/StoragePrefix'
import { createSyncStorage } from '@/data/cache/subjects/createSyncStorage'

const [sessionSyncStorage, atomWithSessionStorage] = createSyncStorage(
  window.sessionStorage,
  StoragePrefix.Session,
)

export { atomWithSessionStorage, sessionSyncStorage }
