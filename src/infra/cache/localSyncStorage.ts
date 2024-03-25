import { StoragePrefix } from '@/data/cache/enums/StoragePrefix'
import { createSyncStorage } from '@/data/cache/subjects/createSyncStorage'

const [localSyncStorage, atomWithLocalStorage] = createSyncStorage(
  window.localStorage,
  StoragePrefix.Local,
)

export { atomWithLocalStorage, localSyncStorage }
