import React from 'react'

import { getComponentDisplayName } from '../utils/getComponentDisplayName'

/**
 * Creates a component which nests each declaration within the next.
 *
 * @example
 * const Component = composedWith(CompA, CompB)
 *
 * render(<Component />) // same as <CompA><CompB>{children}</CompB></CompA>
 * @param components
 * @returns
 */
const composedWith = (...components: React.GenericParentComponent[]) => {
  const componentsOrderedByRenderDepth = [...components].reverse()

  const componentNames = components.map(component =>
    getComponentDisplayName(component),
  )

  const Component: React.PFC = ({ children }) => {
    const allComponents = componentsOrderedByRenderDepth.reduce(
      (children, layer) => React.createElement(layer, null, children),
      children,
    )

    return allComponents
  }
  Component.displayName = `composedWith(${componentNames.join(', ')})`

  return Component
}

export { composedWith }
