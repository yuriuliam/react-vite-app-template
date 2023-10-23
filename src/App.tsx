import { GlobalStyles } from './styles/global'

import { AppProvider } from '@/contexts/app'

import { Routes } from '@/routes'

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <Routes />
    </AppProvider>
  </>
)
App.displayName = 'App'

export { App }
