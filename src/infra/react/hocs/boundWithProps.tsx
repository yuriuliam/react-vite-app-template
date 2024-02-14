import React from 'react'

const boundWithProps = <
  TRef,
  TProps extends Record<any, any>,
  TBounded extends Partial<TProps> = Partial<TProps>,
>(
  Component: React.ComponentType<TProps>,
  propsToBound: TBounded,
) => {
  const componentName = Component.displayName ?? 'Component'

  const ComponentWithProps = React.forwardRef<TRef, TProps>((props, ref) => {
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
  ComponentWithProps.displayName = `boundWithProps(${componentName})`

  return ComponentWithProps
}

export { boundWithProps }
