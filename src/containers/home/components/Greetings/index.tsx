import { useSpring } from '@react-spring/web'

import { useConst } from '@/infra/react/hooks/useConst'

import { useAuth } from '@/modules/auth/infra/contexts/auth'
import { FeatureCode } from '@/modules/features/domain/enums/FeatureCode'
import { FeatureFlagged } from '@/modules/features/infra/components/FeatureFlagged'

import * as Styled from './styles'

const GREETINGS_NAME = 'Containers.Home.Greetings'
const ANIMATION_DELAY_IN_MS = 500

/**
 * A demo component of how you can use feature flag wrappers.
 */
const Greetings: React.FC = () => {
  const rootProps = useSpring({
    from: { top: '-120%', opacity: 0 },
    to: { top: '0%', opacity: 1 },
    delay: ANIMATION_DELAY_IN_MS,
  })
  const { user } = useAuth(GREETINGS_NAME)

  const expectedFeatures = useConst([FeatureCode.ShowUserName])

  return (
    <FeatureFlagged consumerName={GREETINGS_NAME} includes={expectedFeatures}>
      {user && <Styled.Root style={rootProps}>Hello, {user.name}</Styled.Root>}
    </FeatureFlagged>
  )
}

export { Greetings }
