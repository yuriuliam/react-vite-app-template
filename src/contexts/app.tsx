import React from 'react'

import { AuthProvider } from './auth'
import { FeaturesProvider } from './features'
import { StoreProvider } from './store'
import { ThemeProvider } from './theme'

const AppProvider: React.PFC = ({ children }) => {
  return (
    <StoreProvider>
      <FeaturesProvider>
        <ThemeProvider>
          <AuthProvider>
            <>{children}</>
          </AuthProvider>
        </ThemeProvider>
      </FeaturesProvider>
    </StoreProvider>
  )
}
AppProvider.displayName = 'App.AppProvider'

export { AppProvider }
