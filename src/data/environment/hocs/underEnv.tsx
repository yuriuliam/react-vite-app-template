import React from 'react'

import { type EnvironmentMode } from '@/domain/environment/enums/EnvironmentMode'

import { isMode } from '@/infra/environment/use-cases/isMode'
import { getComponentDisplayName } from '@/infra/react/utils/getComponentDisplayName'

/**
 * Renders a component under a specific environment.
 * Useful to restrict components under a specific environment.
 */
const underEnv = <TC extends React.ComponentType<any>>(
  Component: TC,
  mode: EnvironmentMode,
) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithEnv = React.forwardRef<
    React.ComponentRef<TC>,
    React.ComponentProps<TC>
  >((props, ref) => (
    <>{isMode(mode) && <Component {...(props as any)} ref={ref} />}</>
  ))
  ComponentWithEnv.displayName = `withEnv(${componentName})`

  return ComponentWithEnv
}

export { underEnv }
