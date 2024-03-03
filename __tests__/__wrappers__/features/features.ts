import { withProps } from '@/infra/react/hocs/withProps'

import { FeaturesProvider } from '@/modules/features/data/contexts/features'

const FeaturesWrapper = withProps(FeaturesProvider, {})

export { FeaturesWrapper }
