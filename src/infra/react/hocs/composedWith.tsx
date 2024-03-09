import React from 'react'

import { getComponentDisplayName } from '@/shared/utils/react'

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
const composedWith = (...components: Array<React.ComponentType<any>>) => {
  const componentsOrderedByRenderDepth = [...components].reverse()

  const componentNames = components.map(component =>
    getComponentDisplayName(component),
  )

  const Component: React.PFC = ({ children }) =>
    componentsOrderedByRenderDepth.reduce(
      (allLayers, Layer) => <Layer>{allLayers}</Layer>,
      children,
    )
  Component.displayName = `composedWith(${componentNames.join(', ')})`

  return Component
}

export { composedWith }
