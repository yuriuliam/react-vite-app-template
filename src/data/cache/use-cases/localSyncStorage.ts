import { StoragePrefix } from '@/domain/cache/enums/StoragePrefix'

import { createSyncStorage } from '@/infra/cache/use-cases/createSyncStorage'

const [localSyncStorage, atomWithLocalStorage] = createSyncStorage(
  window.localStorage,
  StoragePrefix.Local,
)

export { atomWithLocalStorage, localSyncStorage }
