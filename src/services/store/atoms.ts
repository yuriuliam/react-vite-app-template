import { atomWithStorage } from 'jotai/utils'

import { ATOMS } from '@/utils/constants'
import { asAppLocalStorageKey } from '@/utils/localStorage'

const atoms = Object.freeze({
  /**
   * Authentication Atoms
   */
  auth: Object.freeze({
    token: atomWithStorage<AppModels.AuthToken | null>(
      asAppLocalStorageKey(ATOMS.AUTH.TOKEN),
      null,
      undefined,
      { unstable_getOnInit: true },
    ),
    user: atomWithStorage<AppModels.AuthUser | null>(
      asAppLocalStorageKey(ATOMS.AUTH.USER),
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
      asAppLocalStorageKey(ATOMS.THEME.DARK),
      false,
      undefined,
      {
        unstable_getOnInit: true,
      },
    ),
  }),
})

export { atoms }
