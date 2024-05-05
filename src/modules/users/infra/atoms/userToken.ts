import { atomWithLocalStorage } from '@/infra/cache/localSyncStorage'

const [userToken, useUserToken] =
  atomWithLocalStorage<App.Domain.Commons.Token | null>('users:token', null, {
    getOnInit: true,
  })

export { useUserToken, userToken }
