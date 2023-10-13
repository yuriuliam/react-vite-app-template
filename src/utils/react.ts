import { isFunction } from './functions'

import type React from 'react'

type PossibleRef<T> = React.Ref<T> | undefined

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
 */
const composeRefs = <T>(
  ...refs: Array<PossibleRef<T>>
): React.RefCallback<T> => {
  return node => {
    refs.forEach(ref => {
      if (!ref) return

      if (isFunction(ref)) {
        ref(node)
        return
      }

      // eslint-disable-next-line no-extra-semi
      ;(ref as React.MutableRefObject<T>).current = node as T
    })
  }
}

export { areDependenciesEqual, composeRefs }
