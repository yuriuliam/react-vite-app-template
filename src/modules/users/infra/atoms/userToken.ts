import { atomWithLocalStorage } from '@/data/cache/use-cases/localSyncStorage'

const [userToken, useUserToken] = atomWithLocalStorage<App.Models.Token | null>(
  'users:token',
  null,
  { getOnInit: true },
)

export { useUserToken, userToken }
