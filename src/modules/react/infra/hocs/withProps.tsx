import React from 'react'

const withProps = <TRef, TProps extends Record<any, any>>(
  Component: React.ComponentType<TProps>,
  propsToBound: Partial<TProps>,
) => {
  const componentName = Component.displayName ?? 'Component'

  const ComponentWithProps = React.forwardRef<
    TRef,
    Omit<TProps, keyof TProps> & Partial<TProps>
  >((props, ref) => {
    const allProps = Object.keys(props).reduce<any>(
      (acc, cur) => ({
        ...acc,
        [cur]:
          cur in propsToBound ? props[cur] ?? propsToBound[cur] : props[cur],
      }),
      propsToBound,
    )

    return <Component {...allProps} ref={ref} />
  })
  ComponentWithProps.displayName = `withProps(${componentName})`

  return ComponentWithProps
}

export { withProps }
