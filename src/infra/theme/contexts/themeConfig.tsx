import React from 'react'

import { ThemeConfigContextProvider } from '@/data/theme/contexts/themeConfig'

import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

import { useThemeIsDark } from '../atoms/themeIsDark'

const THEME_PROVIDER_NAME = 'Data.ThemeConfig.Provider'

const ThemeConfigProvider: React.PFC = ({ children }) => {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [isDarkMode, setIsDarkMode] = useThemeIsDark()

  React.useInsertionEffect(() => {
    if (isDarkMode !== null) return

    setIsDarkMode(preferDarkMode)
  }, [])

  React.useInsertionEffect(() => {
    const themeClass = isDarkMode ? 'dark-theme' : 'light-theme'

    document.body.classList.add(themeClass)

    return () => {
      document.body.classList.remove(themeClass)
    }
  }, [isDarkMode])

  return (
    <ThemeConfigContextProvider appearance={isDarkMode ? 'dark' : 'light'}>
      <>{children}</>
    </ThemeConfigContextProvider>
  )
}
ThemeConfigProvider.displayName = THEME_PROVIDER_NAME

export { ThemeConfigProvider }
