import { AuthProvider } from '@/modules/auth/infra/contexts/auth'
import { StoreProvider } from '@/modules/cache/infra/contexts/store'
import { FeaturesProvider } from '@/modules/features/infra/contexts/features'
import { QueryProvider } from '@/modules/query/infra/contexts/query'
import { composedWith } from '@/modules/react/infra/hocs/composedWith'
import { ThemeProvider } from '@/modules/theme/infra/contexts/theme'
import { ToastProvider } from '@/modules/toasts/infra/contexts/toast'

const APP_PROVIDER_NAME = 'Containers.App.Provider'

const AppProvider = composedWith(
  QueryProvider,
  ToastProvider,
  StoreProvider,
  AuthProvider,
  ThemeProvider,
  FeaturesProvider,
)

AppProvider.displayName = APP_PROVIDER_NAME

export { AppProvider }
