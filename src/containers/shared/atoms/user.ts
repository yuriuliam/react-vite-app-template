import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache'

const userAtoms = Object.freeze({
  token: atomWithStorage<App.Models.TokenModel | null>(
    'users:token',
    null,
    localSyncStorage,
    {
      unstable_getOnInit: true,
    },
  ),
  user: atomWithStorage<App.Modules.User.UserModel | null>(
    'users:me',
    null,
    localSyncStorage,
    { unstable_getOnInit: true },
  ),
})

export { userAtoms }
