import { atomWithLocalStorage } from '@/infra/cache/localSyncStorage'

const [userToken, useUserToken] =
  atomWithLocalStorage<App.Domain.Shared.Token | null>('users:token', null, {
    getOnInit: true,
  })

export { useUserToken, userToken }
