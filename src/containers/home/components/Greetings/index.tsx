import { useSpring } from '@react-spring/web'

import { useAuth } from '@/modules/auth/infra/contexts/auth'
import { FeatureCode } from '@/modules/features/domain/enums/FeatureCode'
import { useFeatures } from '@/modules/features/infra/contexts/features'

import * as Styled from './styles'

const GREETINGS_NAME = 'Containers.Home.Greetings'
const ANIMATION_DELAY_IN_MS = 500

/**
 * A demo component of how you can use feature flag wrappers.
 */
const Greetings: React.FC = () => {
  const { user } = useAuth(GREETINGS_NAME)
  const { hasFeatures } = useFeatures(GREETINGS_NAME)

  const rootProps = useSpring({
    from: { top: '-120%', opacity: 0 },
    to: { top: '0%', opacity: 1 },
    delay: ANIMATION_DELAY_IN_MS,
  })

  const hasShowUserName = hasFeatures(FeatureCode.ShowUserName)

  return (
    <Styled.Root style={rootProps}>
      {hasShowUserName && user && <>Hello, {user.name}</>}
    </Styled.Root>
  )
}

export { Greetings }
