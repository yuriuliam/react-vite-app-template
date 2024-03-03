import { type FeatureCode } from '../../domain/enums/FeatureCode'
import { useFeatures } from '../../infra/contexts/features'

type FeatureFlaggedProps = {
  /** Check if it DOES NOT include these feature flags */
  excepts?: FeatureCode[] | undefined
  /** Check if it include these feature flags */
  includes?: FeatureCode[] | undefined
  /** The component which is consuming the features context. */
  consumerName: string
}

const FEATURE_FLAGGED_NAME = 'Modules.Features.FeatureFlagged'

/**
 * Puts an entire section o
 */
const FeatureFlagged: React.PFC<FeatureFlaggedProps> = ({
  children,
  includes = [],
  excepts = [],
  consumerName,
}) => {
  const { exceptFeatures, hasFeatures } = useFeatures(
    `FeatureFlagged(${consumerName})`,
  )

  const shouldRender = hasFeatures(...includes) && exceptFeatures(...excepts)

  return <>{shouldRender && children}</>
}
FeatureFlagged.displayName = FEATURE_FLAGGED_NAME

export { FeatureFlagged }
