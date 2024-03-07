import { atomWithLocalStorage } from '@/data/cache/use-cases/localSyncStorage'

const [userMe, useUserMe] =
  atomWithLocalStorage<App.Modules.User.AppUser | null>('users:me', null, {
    getOnInit: true,
  })

export { useUserMe, userMe }