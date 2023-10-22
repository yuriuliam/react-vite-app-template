import React from 'react'

import { Theme } from '@radix-ui/themes'
import { useAtom } from 'jotai'

import { useConst } from '@/hooks/useConst'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { atoms } from '@/services/store/atoms'

import { COMPONENTS } from '@/utils/constants'

const ThemeProvider: React.PFC = ({ children }) => {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const themeClasses = useConst(
    Object.freeze({ dark: 'dark-theme', light: 'light-theme' }),
  )

  const [isDarkMode, setIsDarkMode] = useAtom(atoms.theme.isDarkMode)

  React.useInsertionEffect(() => {
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
ThemeProvider.displayName = COMPONENTS.NAMES.THEME_PROVIDER

export { ThemeProvider }
