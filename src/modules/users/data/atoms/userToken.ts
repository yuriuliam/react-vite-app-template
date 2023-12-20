import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache'

const userToken = atomWithStorage<App.Models.TokenModel | null>(
  'users:token',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userToken }