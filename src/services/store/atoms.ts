import { atomWithStorage } from 'jotai/utils'

import { LOCAL_STORAGE } from '@/utils/constants'
import { asAppLocalStorageKey } from '@/utils/localStorage'

const atoms = Object.freeze({
  /**
   * Authentication Atoms
   */
  auth: Object.freeze({
    token: atomWithStorage<AppModels.AuthToken | null>(
      asAppLocalStorageKey(LOCAL_STORAGE.AUTH.TOKEN),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
    user: atomWithStorage<AppModels.AuthUser | null>(
      asAppLocalStorageKey(LOCAL_STORAGE.AUTH.USER),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
  }),

  /**
   * Theme Atoms
   */
  theme: Object.freeze({
    isDarkMode: atomWithStorage(
      asAppLocalStorageKey(LOCAL_STORAGE.THEME.DARK),
      false,
      undefined,
      {
        unstable_getOnInit: true,
      },
    ),
  }),
})

export { atoms }
