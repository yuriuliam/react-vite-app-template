import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/modules/cache/infra/core/localSyncStorage'

const userToken = atomWithStorage<App.Models.TokenModel | null>(
  'users:token',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { userToken }
