import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/cache/core/localSyncStorage'

const themeIsDark = atomWithStorage<App.Infra.Theme.IsDarkMode | null>(
  'themes:isDark',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { themeIsDark }
