import { localSyncStorage } from '@/data/cache/use-cases/localSyncStorage'

import { createAtomWithStorage } from '@/infra/cache/use-cases/createAtomWithStorage'

const userToken = createAtomWithStorage<App.Models.Token | null>(
  'users:token',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userToken }
