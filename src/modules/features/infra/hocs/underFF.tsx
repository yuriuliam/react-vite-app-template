import { getComponentDisplayName } from '@/shared/utils/react'

import { FeatureFlagged } from '../components/FeatureFlagged'

const underFF = <T extends React.ComponentType<any>>(
  Component: T,
  ffProps: React.ComponentPropsWithoutChildren<typeof FeatureFlagged>,
) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentUnderFF = React.forwardRef<
    React.ComponentRef<T>,
    React.ComponentProps<T>
  >((props, ref) => (
    <FeatureFlagged {...ffProps}>
      <Component {...(props as any)} ref={ref} />
    </FeatureFlagged>
  ))
  ComponentUnderFF.displayName = `underFF(${componentName})`

  return ComponentUnderFF
}

export { underFF }
