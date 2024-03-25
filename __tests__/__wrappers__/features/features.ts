import { withProps } from '@/data/shared/hocs/withProps'

import { FeaturesProvider } from '@/modules/features/infra/contexts/features'

const FeaturesWrapper = withProps(FeaturesProvider, {})

export { FeaturesWrapper }
