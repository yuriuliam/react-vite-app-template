import { StoreProvider } from '@/infra/cache/contexts/store'

import { withProps } from '@/shared/hocs/withProps'

const StoreWrapper = withProps(StoreProvider, {})

export { StoreWrapper }
