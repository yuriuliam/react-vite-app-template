import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/cache/core/localSyncStorage'

const userMe = atomWithStorage<App.Modules.User.AppUser | null>(
  'users:me',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userMe }
