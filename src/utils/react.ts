import { isFunctionType } from './functions'

const areDependenciesEqual = (
  nextDeps: React.DependencyList,
  prevDeps: React.DependencyList,
) => {
  if (nextDeps.length !== prevDeps.length) return false

  for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (Object.is(nextDeps.at(i), prevDeps.at(i))) continue

    return false
  }

  return true
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

export { areDependenciesEqual, composeRefs }
