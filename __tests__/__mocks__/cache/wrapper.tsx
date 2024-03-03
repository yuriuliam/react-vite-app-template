import { StoreProvider } from '@/infra/cache/contexts/store'
import { withProps } from '@/infra/react/hocs/withProps'

const StoreWrapper = withProps(StoreProvider, {})

export { StoreWrapper }
