import { StoreProvider } from '@/infra/cache/contexts/store'
import { composedWith } from '@/infra/react/hocs/composedWith'

import { AuthProvider } from '@/modules/auth/infra/contexts/auth'
import { FeaturesProvider } from '@/modules/features/infra/contexts/features'
import { ThemeProvider } from '@/modules/theme/infra/contexts/theme'

const APP_PROVIDER_NAME = 'Containers.App.Provider'

const AppProvider = composedWith(
  StoreProvider,
  AuthProvider,
  ThemeProvider,
  FeaturesProvider,
)

AppProvider.displayName = APP_PROVIDER_NAME

export { AppProvider }
