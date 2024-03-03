import { Text } from '@radix-ui/themes'

import { useConst } from '@/infra/react/hooks/useConst'

import { useAuth } from '@/modules/auth/infra/contexts/auth'
import { FeatureCode } from '@/modules/features/domain/enums/FeatureCode'
import { FeatureFlagged } from '@/modules/features/infra/components/FeatureFlagged'

const GREETINGS_NAME = 'Containers.Home.Greetings'

/**
 * A demo component of how you can use feature flag wrappers.
 */
const Greetings: React.FC = () => {
  const { user } = useAuth(GREETINGS_NAME)

  const expectedFeatures = useConst([FeatureCode.ShowUserName])

  return (
    <FeatureFlagged consumerName={GREETINGS_NAME} includes={expectedFeatures}>
      {user && <Text>Hello, {user.name}</Text>}
    </FeatureFlagged>
  )
}

export { Greetings }
