import React from 'react'

import { Provider as JotaiStoreProvider } from 'jotai'

import { store } from '@/services/store'

import { COMPONENTS } from '@/utils/constants'

const StoreProvider: React.PFC = ({ children }) => (
  <JotaiStoreProvider store={store}>{children}</JotaiStoreProvider>
)
StoreProvider.displayName = COMPONENTS.NAMES.STORE_PROVIDER

export { StoreProvider }
