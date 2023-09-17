import { asLocalStorageKey } from '../../utils/localStorage'
import { atomWithStorage } from 'jotai/utils'

const atoms = Object.freeze({
  auth: Object.freeze({
    token: atomWithStorage<App.UserToken | null>(
      asLocalStorageKey('auth:token'),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
    user: atomWithStorage<App.User | null>('auth:user', null, undefined, {
      unstable_getOnInit: true,
    }),
  }),

  isDarkMode: atomWithStorage(asLocalStorageKey('dark'), false, undefined, {
    unstable_getOnInit: true,
  }),
})

export { atoms }
