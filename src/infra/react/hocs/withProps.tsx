import React from 'react'

import { getComponentDisplayName } from '../utils/getComponentDisplayName'

/**
 * Creates a component with props.
 * Same as creating a component with default props.
 */
const withProps = <TRef, TProps extends Record<any, any>>(
  Component: React.ComponentType<TProps>,
  propsToBound: Partial<TProps>,
) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithProps = React.forwardRef<
    TRef,
    Omit<TProps, keyof TProps> & Partial<TProps>
  >((props, ref) => (
    <Component
      {...Object.assign<any, any, any>(propsToBound, props, { ref })}
    />
  ))
  ComponentWithProps.displayName = `withProps(${componentName})`

  return ComponentWithProps
}

export { withProps }
