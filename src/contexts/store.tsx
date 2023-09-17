import React from 'react'

import { Provider as JotaiStoreProvider } from 'jotai'

import { store } from '../services/store'

const StoreProvider: React.PFC = ({ children }) => {
  return (
    <JotaiStoreProvider store={store}>
      <>{children}</>
    </JotaiStoreProvider>
  )
}
StoreProvider.displayName = 'App.StoreProvider'

export { StoreProvider }
