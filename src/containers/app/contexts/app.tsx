import React from 'react'

import { StoreProvider } from '@/infra/cache/contexts/store'
import { ThemeProvider } from '@/infra/theme/contexts/theme'

import { AuthProvider } from '@/modules/auth/infra/contexts/auth'
import { FeaturesProvider } from '@/modules/features/infra/contexts/features'

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
