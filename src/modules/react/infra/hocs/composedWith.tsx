import React from 'react'

/**
 * Creates a component which nests each declaration within the next.
 *
 * @example
 * // same as const Component = ({ children }) => <CompA><CompB>{children}</CompB></CompA>
 * const Component = composedWith(CompA, CompB)
 * @param components
 * @returns
 */
const composedWith = (
  ...components: Array<React.ComponentType<React.PropsWithChildren>>
) => {
  const componentsOrderedByRender = [...components].reverse()

  const componentNames = components.map(
    component => component.displayName ?? 'Component',
  )

  const Component: React.PFC = ({ children }) => {
    const allComponents = componentsOrderedByRender.reduce(
      (children, layer) => React.createElement(layer, {}, children),
      children,
    )

    return allComponents
  }
  Component.displayName = `composedWith(${componentNames.join(', ')})`

  return Component
}

export { composedWith }
