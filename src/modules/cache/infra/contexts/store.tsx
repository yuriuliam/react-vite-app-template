import { Provider as JotaiStoreProvider } from 'jotai'

import { withProps } from '@/modules/react/infra/hocs/withProps'

import { appStore } from '../core/appStore'

const STORE_PROVIDER_NAME = 'Modules.Cache.StoreProvider'

const StoreProvider = withProps(JotaiStoreProvider, { store: appStore })
StoreProvider.displayName = STORE_PROVIDER_NAME

export { StoreProvider }
