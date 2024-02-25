import { StoragePrefix } from '@/domain/cache/enums/StoragePrefix'

import { createSyncStorage } from '@/infra/cache/use-cases/createSyncStorage'

const [sessionSyncStorage, atomWithSessionStorage] = createSyncStorage(
  window.sessionStorage,
  StoragePrefix.Session,
)

export { atomWithSessionStorage, sessionSyncStorage }
