import React from 'react'

import { AuthProvider } from './auth'
import { FeaturesProvider } from './features'
import { StoreProvider } from './store'
import { ThemeProvider } from './theme'

import { COMPONENTS } from '@/utils/constants'

const AppProvider: React.PFC = ({ children }) => (
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
AppProvider.displayName = COMPONENTS.NAMES.APP_PROVIDER

export { AppProvider }
