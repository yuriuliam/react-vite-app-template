import { AppProvider } from './contexts/app'
import { Routes } from './routes'
import { GlobalStyles } from './styles/global'

const APP_NAME = 'App.Root'

const App: React.FC = () => (
  <>
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  </>
)
App.displayName = APP_NAME

export { App }
