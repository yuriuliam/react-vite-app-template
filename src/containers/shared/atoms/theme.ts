import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache'

const themeAtoms = Object.freeze({
  isDarkMode: atomWithStorage<boolean | null>(
    'themes:isDark',
    null,
    localSyncStorage,
    {
      unstable_getOnInit: true,
    },
  ),
})

export { themeAtoms }
