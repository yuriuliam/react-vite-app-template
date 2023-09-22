import { atomWithStorage } from 'jotai/utils'

import { asLocalStorageKey } from '@/utils/localStorage'

const atoms = Object.freeze({
  /** Authentication Atoms */
  auth: Object.freeze({
    token: atomWithStorage<App.UserToken | null>(
      asLocalStorageKey('auth:token'),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
    user: atomWithStorage<App.User | null>(
      asLocalStorageKey('auth:user'),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
  }),

  /** Theme Atoms */
  theme: Object.freeze({
    isDarkMode: atomWithStorage(
      asLocalStorageKey('theme:dark'),
      false,
      undefined,
      {
        unstable_getOnInit: true,
      },
    ),
  }),
})

export { atoms }
