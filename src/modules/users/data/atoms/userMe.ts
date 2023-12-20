import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache'

const userMe = atomWithStorage<App.Modules.User.UserModel | null>(
  'users:me',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userMe }
