import React from 'react'

import { ThemeContextProvider } from '@/data/theme/contexts/theme'

import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

import { useThemeIsDark } from '../atoms/themeIsDark'

const THEME_PROVIDER_NAME = 'Data.Theme.Provider'

const ThemeProvider: React.PFC = ({ children }) => {
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
    <ThemeContextProvider appearance={isDarkMode ? 'dark' : 'light'}>
      <>{children}</>
    </ThemeContextProvider>
  )
}
ThemeProvider.displayName = THEME_PROVIDER_NAME

export { ThemeProvider }
