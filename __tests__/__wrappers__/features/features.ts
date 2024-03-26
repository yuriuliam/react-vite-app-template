import { FeaturesProvider } from '@/modules/features/infra/contexts/features'

import { withProps } from '@/shared/hocs/withProps'

const FeaturesWrapper = withProps(FeaturesProvider, {})

export { FeaturesWrapper }
