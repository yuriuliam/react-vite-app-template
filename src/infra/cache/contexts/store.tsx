import { Provider as JotaiStoreProvider } from 'jotai'

import { appStore } from '@/data/cache/use-cases/appStore'

import { withProps } from '@/infra/react/hocs/withProps'

const STORE_CONTEXT_PROVIDER_NAME = 'Infra.Cache.StoreContextProvider'

const StoreProvider = withProps(JotaiStoreProvider, { store: appStore })
StoreProvider.displayName = STORE_CONTEXT_PROVIDER_NAME

export { StoreProvider }
