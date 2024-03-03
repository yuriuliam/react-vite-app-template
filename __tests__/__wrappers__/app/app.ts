import { AppProvider } from '@/containers/app/contexts/app'

import { withProps } from '@/infra/react/hocs/withProps'

const AppWrapper = withProps(AppProvider, {})

export { AppWrapper }
