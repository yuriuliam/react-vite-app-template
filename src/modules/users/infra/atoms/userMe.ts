import { localSyncStorage } from '@/data/cache/use-cases/localSyncStorage'

import { createAtomWithStorage } from '@/infra/cache/use-cases/createAtomWithStorage'

const userMe = createAtomWithStorage<App.Modules.User.AppUser | null>(
  'users:me',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userMe }
