import { Provider as JotaiStoreProvider } from 'jotai'

import { withProps } from '@/shared/hocs/withProps'

import { appStore } from '../appStore'

const STORE_CONTEXT_PROVIDER_NAME = 'Infra.Cache.StoreContextProvider'

const StoreProvider = withProps(JotaiStoreProvider, { store: appStore })
StoreProvider.displayName = STORE_CONTEXT_PROVIDER_NAME

export { StoreProvider }
