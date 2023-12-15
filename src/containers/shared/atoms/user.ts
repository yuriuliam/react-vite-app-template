import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache'

const userAtoms = Object.freeze({
  token: atomWithStorage<App.Models.TokenModel | null>(
    'users:token',
    null,
    localSyncStorage,
    { getOnInit: true },
  ),
  user: atomWithStorage<App.Modules.User.UserModel | null>(
    'users:me',
    null,
    localSyncStorage,
    { getOnInit: true },
  ),
})

export { userAtoms }
