import React from 'react'

import { ThemeContextProvider } from '@/data/theme/contexts/theme'

const THEME_PROVIDER_NAME = 'Data.Theme.Provider'

const ThemeProvider: React.PFC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <>{children}</>
    </ThemeContextProvider>
  )
}
ThemeProvider.displayName = THEME_PROVIDER_NAME

export { ThemeProvider }
