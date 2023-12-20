import React from 'react'

import { Theme } from '@radix-ui/themes'

import { useConst } from '@/containers/shared/hooks/useConst'
import { useMediaQuery } from '@/containers/shared/hooks/useMediaQuery'

import { useThemeIsDark } from '@/modules/themes/infra/hooks'

const THEME_PROVIDER_NAME = 'Providers.Theme'

const ThemeProvider: React.PFC = ({ children }) => {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const themeClasses = useConst({ dark: 'dark-theme', light: 'light-theme' })

  const [isDarkMode, setIsDarkMode] = useThemeIsDark()

  React.useInsertionEffect(() => {
    if (isDarkMode !== null) return

    setIsDarkMode(preferDarkMode)
  }, [])

  React.useInsertionEffect(() => {
    const themeClass = Reflect.get(themeClasses, isDarkMode ? 'dark' : 'light')

    document.body.classList.add(themeClass)

    return () => {
      document.body.classList.remove(themeClass)
    }
  }, [isDarkMode])

  return (
    <Theme
      appearance={isDarkMode ? 'dark' : 'light'}
      accentColor="amber"
      grayColor="slate"
    >
      <>{children}</>
    </Theme>
  )
}
ThemeProvider.displayName = THEME_PROVIDER_NAME

export { ThemeProvider }
