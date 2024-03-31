import { AppProvider } from '@/infra/app/contexts/app'
import { Routes } from '@/infra/app/routes'
import { GlobalStyles } from '@/infra/theme/styles/global'

const APP_NAME = 'Containers.App.Root'

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <AppProvider>
      <Routes />
    </AppProvider>
  </>
)
App.displayName = APP_NAME

export { App }
