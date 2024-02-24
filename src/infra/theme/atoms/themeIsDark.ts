import { localSyncStorage } from '@/data/cache/use-cases/localSyncStorage'

import { createAtomWithStorage } from '@/infra/cache/use-cases/createAtomWithStorage'

const themeIsDark = createAtomWithStorage<App.Domain.Theme.IsDarkMode | null>(
  'themes:isDark',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { themeIsDark }
