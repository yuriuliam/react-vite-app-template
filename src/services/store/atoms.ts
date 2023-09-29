import { atomWithStorage } from 'jotai/utils'

import { asAppLocalStorageKey } from '@/utils/localStorage'

const atoms = Object.freeze({
  /** Authentication Atoms */
  auth: Object.freeze({
    token: atomWithStorage<App.UserToken | null>(
      asAppLocalStorageKey('auth:token'),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
    user: atomWithStorage<App.User | null>(
      asAppLocalStorageKey('auth:user'),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
  }),

  /** Theme Atoms */
  theme: Object.freeze({
    isDarkMode: atomWithStorage(
      asAppLocalStorageKey('theme:dark'),
      false,
      undefined,
      {
        unstable_getOnInit: true,
      },
    ),
  }),
})

export { atoms }
