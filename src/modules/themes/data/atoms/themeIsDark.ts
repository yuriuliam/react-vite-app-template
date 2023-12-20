import { atomWithStorage } from 'jotai/utils'

import { localSyncStorage } from '@/infra/protocols/cache'

const themeIsDark = atomWithStorage<boolean | null>(
  'themes:isDark',
  null,
  localSyncStorage,
  { getOnInit: true },
)

export { themeIsDark }
