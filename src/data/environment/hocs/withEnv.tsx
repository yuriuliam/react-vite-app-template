import React from 'react'

import { type EnvironmentMode } from '@/domain/environment/enums/EnvironmentMode'

import { isMode } from '@/infra/environment/use-cases/isMode'
import { getComponentDisplayName } from '@/infra/react/utils/getComponentDisplayName'

const withEnv = <TC extends React.ComponentType<any>>(
  Component: TC,
  mode: EnvironmentMode,
) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithEnv = React.forwardRef<
    React.ComponentRef<TC>,
    React.ComponentProps<TC>
  >((props, ref) => (
    <>
      {isMode(mode) && (
        <Component {...Object.assign({} as any, props, { ref })} />
      )}
    </>
  ))
  ComponentWithEnv.displayName = `withEnv(${componentName})`

  return ComponentWithEnv
}

export { withEnv }
