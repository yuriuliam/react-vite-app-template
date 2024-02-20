import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/modules/cache/infra/core/localSyncStorage'

const themeIsDark = atomWithStorage<App.Modules.Theme.IsDarkMode | null>(
  'themes:isDark',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { themeIsDark }
