import { isFunctionType } from '@/shared/utils/functions'

import { parallelMap } from './objects'

const areDependenciesEqual = (
  nextDeps: React.DependencyList,
  prevDeps: React.DependencyList,
) => {
  if (nextDeps.length !== prevDeps.length) return false

  const depsCheck = parallelMap(nextDeps, prevDeps, ([itemA, itemB]) =>
    Object.is(itemA, itemB),
  )

  return !depsCheck.includes(false)
}

/**
 * Composes React Refs into a callback,
 * making it possible to stack multiple refs.
 *
 * @param refs the refs to be composed.
 * @returns a composed ref callback.
 */
const composeRefs = <T>(
  ...refs: Array<React.PossibleRef<T>>
): React.RefCallback<T> => {
  return node => {
    refs.forEach(ref => {
      if (!ref) return

      if (isFunctionType(ref)) {
        ref(node)
        return
      }

      // eslint-disable-next-line no-extra-semi
      ;(ref as React.MutableRefObject<T>).current = node as T
    })
  }
}

const getComponentDisplayName = (Component: React.ComponentType<any>) =>
  Component.displayName || Component.name || 'Component'

export { areDependenciesEqual, composeRefs, getComponentDisplayName }
