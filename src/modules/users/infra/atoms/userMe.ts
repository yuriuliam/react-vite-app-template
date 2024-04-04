import { atomWithLocalStorage } from '@/infra/cache/localSyncStorage'

const [userMe, useUserMe] =
  atomWithLocalStorage<App.Modules.Users.User | null>('users:me', null, {
    getOnInit: true,
  })

export { useUserMe, userMe }
