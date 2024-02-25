const getComponentDisplayName = (Component: React.GenericComponent) =>
  Component.displayName || Component.name || 'Component'

export { getComponentDisplayName }
