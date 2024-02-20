import React from 'react'

import { Provider as JotaiStoreProvider } from 'jotai'

import { appStore } from '../core/appStore'

const STORE_PROVIDER_NAME = 'Modules.Cache.StoreProvider'

const StoreProvider: React.PFC = ({ children }) => (
  <JotaiStoreProvider store={appStore}>{children}</JotaiStoreProvider>
)
StoreProvider.displayName = STORE_PROVIDER_NAME

export { StoreProvider }
