import { withProps } from '@/data/shared/hocs/withProps'

import { StoreProvider } from '@/infra/cache/contexts/store'

const StoreWrapper = withProps(StoreProvider, {})

export { StoreWrapper }
