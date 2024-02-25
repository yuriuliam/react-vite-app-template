import React from 'react'

import { useConst } from '@/infra/react/hooks/useConst'
import { useMediaQuery } from '@/infra/react/hooks/useMediaQuery'
import { useThemeIsDark } from '@/infra/theme/atoms/themeIsDark'
import { ThemeContextProvider } from '@/infra/theme/contexts/theme'

const THEME_PROVIDER_NAME = 'Infra.Theme.Provider'

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
    <ThemeContextProvider appearance={isDarkMode ? 'dark' : 'light'}>
      <>{children}</>
    </ThemeContextProvider>
  )
}
ThemeProvider.displayName = THEME_PROVIDER_NAME

export { ThemeProvider }