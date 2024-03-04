import { withProps } from '@/infra/react/hocs/withProps'
import { getComponentDisplayName } from '@/infra/react/utils/getComponentDisplayName'

import { FeatureFlagged } from '../components/FeatureFlagged'

const underFF = <T extends React.ComponentType<any>>(
  Component: T,
  props: React.ComponentPropsWithoutChildren<typeof FeatureFlagged>,
) => {
  const componentName = getComponentDisplayName(Component)

  const BoundFeatureFlagged = withProps(FeatureFlagged, props)

  const ComponentUnderFF = React.forwardRef<
    React.ComponentRef<T>,
    React.ComponentProps<T>
  >((props, ref) => (
    <BoundFeatureFlagged>
      <Component {...(props as any)} ref={ref} />
    </BoundFeatureFlagged>
  ))
  ComponentUnderFF.displayName = `underFF(${componentName})`

  return ComponentUnderFF
}

export { underFF }
