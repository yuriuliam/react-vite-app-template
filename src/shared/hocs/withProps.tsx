import React from 'react'

import { getComponentDisplayName } from '../utils/react'

/**
 * Creates a component with props.
 * Same as creating a component with default props.
 */
const withProps: App.Domain.React.WithPropsHOC = (Component, propsToBound) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithProps = React.forwardRef((props, ref) => (
    <Component
      {...Object.assign<any, any, any>({}, propsToBound, props)}
      ref={ref}
    />
  ))
  ComponentWithProps.displayName = `withProps(${componentName})`

  return ComponentWithProps as App.Domain.React.WithPropsComponent<
    React.ComponentProps<typeof Component>,
    keyof typeof propsToBound
  >
}

export { withProps }
