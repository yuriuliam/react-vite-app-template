import { AppProvider } from '@/containers/app/contexts/app'

import { withProps } from '@/shared/hocs/withProps'

const AppWrapper = withProps(AppProvider, {})

export { AppWrapper }
