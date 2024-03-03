import { type FeatureCode } from '../../domain/enums/FeatureCode'
import { useFeatures } from '../../infra/contexts/features'

type FeatureFlaggedProps = {
  /** Check if it DOES NOT include these feature flags */
  excepts?: FeatureCode[] | undefined
  /** Check if it include these feature flags */
  includes?: FeatureCode[] | undefined
  /** To Identify better when debugging why a component is not showing. */
  id: string
}

const FEATURE_FLAGGED_NAME = 'Modules.Features.FeatureFlagged'

const FeatureFlagged: React.PFC<FeatureFlaggedProps> = ({
  children,
  includes = [],
  excepts = [],
  id,
}) => {
  const { exceptFeatures, hasFeatures } = useFeatures(`FeatureFlagged(${id})`)

  const shouldRender = hasFeatures(...includes) && exceptFeatures(...excepts)

  return <>{shouldRender && children}</>
}
FeatureFlagged.displayName = FEATURE_FLAGGED_NAME

export { FeatureFlagged }
