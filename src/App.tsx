import { AppProvider } from '@/contexts/app'

import { Routes } from '@/routes'

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export { App }
