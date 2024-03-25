import { atomWithLocalStorage } from '@/infra/cache/localSyncStorage'

const [themeIsDark, useThemeIsDark] =
  atomWithLocalStorage<App.Domain.Theme.IsDarkMode | null>(
    'themes:isDark',
    null,
    { getOnInit: true },
  )

export { themeIsDark, useThemeIsDark }
