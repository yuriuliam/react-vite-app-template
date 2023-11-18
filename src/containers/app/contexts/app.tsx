import React from 'react'

import { AuthProvider } from '@/containers/shared/contexts/auth'
import { FeaturesProvider } from '@/containers/shared/contexts/features'
import { StoreProvider } from '@/containers/shared/contexts/store'
import { ThemeProvider } from '@/containers/shared/contexts/theme'

const APP_PROVIDER_NAME = 'App.Contexts.Root'

const AppProvider: React.PFC = ({ children }) => (
  <StoreProvider>
    <AuthProvider>
      <FeaturesProvider>
        <ThemeProvider>
          <>{children}</>
        </ThemeProvider>
      </FeaturesProvider>
    </AuthProvider>
  </StoreProvider>
)
AppProvider.displayName = APP_PROVIDER_NAME

export { AppProvider }
