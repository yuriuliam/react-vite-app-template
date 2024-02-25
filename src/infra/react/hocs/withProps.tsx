import React from 'react'

import { getComponentDisplayName } from '../utils/getComponentDisplayName'

/**
 * Creates a component with props.
 * Same as creating a component with default props.
 */
const withProps = <TProps extends Record<any, any>>(
  Component: React.ComponentType<TProps>,
  propsToBound: Partial<TProps>,
) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithProps = React.forwardRef<
    React.ComponentRef<typeof Component>,
    Omit<TProps, keyof TProps> & Partial<TProps>
  >(({ children, ...props }, ref) =>
    React.createElement(
      Component,
      Object.assign({}, propsToBound, props as any, { ref }),
      children,
    ),
  )
  ComponentWithProps.displayName = `withProps(${componentName})`

  return ComponentWithProps
}

export { withProps }
