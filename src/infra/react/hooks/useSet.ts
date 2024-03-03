import React from 'react'

import { useForceUpdate } from './useForceUpdate'

/**
 * Creates a `Set<T>` which works with React updates.
 *
 * @returns a collection of functions and properties to interact with the set.
 */
const useSet = <T>(iterable?: Iterable<T> | null | undefined) => {
  const forceUpdate = useForceUpdate()

  const set = React.useRef(new Set(iterable))

  set.current.add = (...args) => {
    const result = Set.prototype.add.apply(set.current, args)
    forceUpdate()

    return result
  }

  set.current.delete = (...args) => {
    const result = Set.prototype.delete.apply(set.current, args)

    forceUpdate()

    return result
  }

  set.current.clear = (...args) => {
    Set.prototype.clear.apply(set.current, args)
    forceUpdate()
  }

  return set.current
}

export { useSet }
