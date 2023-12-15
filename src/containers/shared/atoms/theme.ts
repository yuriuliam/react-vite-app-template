import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache'

const themeAtoms = Object.freeze({
  isDarkMode: atomWithStorage<boolean | null>(
    'themes:isDark',
    null,
    localSyncStorage,
    { getOnInit: true },
  ),
})

export { themeAtoms }
