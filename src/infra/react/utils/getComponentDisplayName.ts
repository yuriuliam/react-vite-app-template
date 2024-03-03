const getComponentDisplayName = (Component: React.ComponentType<any>) =>
  Component.displayName || Component.name || 'Component'

export { getComponentDisplayName }
