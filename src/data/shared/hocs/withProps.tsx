import React from 'react'

import { getComponentDisplayName } from '../utils/getComponentDisplayName'

type BoundedProps<TP, TB> = Omit<TP, keyof TB> & Partial<TB>

/**
 * Creates a component with props.
 * Same as creating a component with default props.
 */
const withProps = <TP extends Record<any, any>, TB = Partial<TP>>(
  Component: React.ComponentType<TP>,
  propsToBound: React.PropsWithoutChildren<TB>,
) => {
  const componentName = getComponentDisplayName(Component)

  const ComponentWithProps = React.forwardRef<
    React.ComponentRef<typeof Component>,
    BoundedProps<TP, TB>
  >((props, ref) => (
    <Component {...Object.assign({} as any, propsToBound, props)} ref={ref} />
  ))
  ComponentWithProps.displayName = `withProps(${componentName})`

  return ComponentWithProps
}

export { withProps }
