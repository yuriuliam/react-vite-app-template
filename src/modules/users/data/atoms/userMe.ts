import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/modules/cache/infra/core/localSyncStorage'

const userMe = atomWithStorage<App.Modules.User.AppUser | null>(
  'users:me',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userMe }
