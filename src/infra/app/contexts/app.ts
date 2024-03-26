import { StoreProvider } from '@/infra/cache/contexts/store'
import { QueryProvider } from '@/infra/react-query/queryClient'
import { ThemeProvider } from '@/infra/theme/contexts/theme'
import { ToastProvider } from '@/infra/toast/contexts/toast'

import { AuthProvider } from '@/modules/auth/infra/contexts/auth'
import { FeaturesProvider } from '@/modules/features/infra/contexts/features'

import { composedWith } from '@/shared/hocs/composedWith'

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
