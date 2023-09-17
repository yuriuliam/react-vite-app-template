import React from 'react'

import { Theme } from '@radix-ui/themes'
import { useAtom } from 'jotai'

import { useConst } from '../hooks/useConst'
import { useMediaQuery } from '@uidotdev/usehooks'

import { atoms } from '../services/store/atoms'

const ThemeProvider: React.PFC = ({ children }) => {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const themeClasses = useConst(
    Object.freeze({
      dark: 'dark-theme',
      light: 'light-theme',
    }),
  )

  const [isDarkMode, setIsDarkMode] = useAtom(atoms.isDarkMode)

  React.useInsertionEffect(() => {
    setIsDarkMode(preferDarkMode)
  }, [])

  React.useInsertionEffect(() => {
    const themeClass = themeClasses[isDarkMode ? 'dark' : 'light']

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
ThemeProvider.displayName = 'App.ThemeProvider'

export { ThemeProvider }
