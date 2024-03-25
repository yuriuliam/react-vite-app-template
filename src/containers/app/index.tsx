import { AppProvider } from '@/infra/app/contexts/app'

import { Routes } from './routes'
import { GlobalStyles } from './styles/global'

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
