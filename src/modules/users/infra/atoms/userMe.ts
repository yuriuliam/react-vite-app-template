import { atomWithLocalStorage } from '@/infra/cache/localSyncStorage'

const [userMe, useUserMe] =
  atomWithLocalStorage<App.Modules.User.AppUser | null>('users:me', null, {
    getOnInit: true,
  })

export { useUserMe, userMe }
