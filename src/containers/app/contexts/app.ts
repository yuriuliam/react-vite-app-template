import { ThemeProvider } from '@/data/theme/contexts/theme'
import { ToastProvider } from '@/data/toast/contexts/toast'

import { StoreProvider } from '@/infra/cache/contexts/store'
import { QueryProvider } from '@/infra/react-query/contexts/query'
import { composedWith } from '@/infra/react/hocs/composedWith'

import { AuthProvider } from '@/modules/auth/data/contexts/auth'
import { FeaturesProvider } from '@/modules/features/data/contexts/features'

const APP_PROVIDER_NAME = 'Containers.App.Provider'

const AppProvider = composedWith(
  QueryProvider,
  StoreProvider,
  ToastProvider,
  AuthProvider,
  ThemeProvider,
  FeaturesProvider,
)
AppProvider.displayName = APP_PROVIDER_NAME

export { AppProvider }
