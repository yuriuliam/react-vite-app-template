import { parallel } from './objects'

const areDependenciesEqual = (
  nextDeps: React.DependencyList,
  prevDeps: React.DependencyList,
) => {
  if (nextDeps.length !== prevDeps.length) return false

  return parallel(nextDeps, prevDeps).every(([itemA, itemB]) =>
    Object.is(itemA, itemB),
  )
}

const getComponentDisplayName = (Component: React.ComponentType<any>) =>
  Component.displayName || Component.name || 'Component'

export { areDependenciesEqual, getComponentDisplayName }
