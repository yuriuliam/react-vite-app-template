/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

const getComponentDisplayName = (
  Component: React.NamedExoticComponent<any> | React.ComponentType<any>,
) => {
  return Component.displayName || Component.name || 'Component'
}

export { getComponentDisplayName }
