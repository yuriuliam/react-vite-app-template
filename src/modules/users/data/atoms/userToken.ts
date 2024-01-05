import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache/localSyncStorage'

const userToken = atomWithStorage<App.Models.TokenModel | null>(
  'users:token',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userToken }
