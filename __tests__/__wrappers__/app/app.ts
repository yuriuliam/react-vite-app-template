import { withProps } from '@/data/shared/hocs/withProps'

import { AppProvider } from '@/infra/app/contexts/app'

const AppWrapper = withProps(AppProvider, {})

export { AppWrapper }
