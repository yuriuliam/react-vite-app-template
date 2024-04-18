import { GlobalStyles } from '@/infra/theme/styles/global'

import { MainRouter } from '@/modules/routing/infra/router'

import { AppProvider } from './contexts/app'

const APP_NAME = 'Containers.App.Root'

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <AppProvider>
      <MainRouter />
    </AppProvider>
  </>
)
App.displayName = APP_NAME

export { App }
