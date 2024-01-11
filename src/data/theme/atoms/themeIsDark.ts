import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/cache/core/localSyncStorage'

const themeIsDark = atomWithStorage<boolean | null>(
  'themes:isDark',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { themeIsDark }
