import React from 'react'

import { useCallbackRef } from './useCallbackRef'
import { useForceUpdate } from './useForceUpdate'

/**
 * Creates a `Set<T>` which works with React updates.
 *
 * @returns a collection of functions and properties to interact with the set.
 */
const useSet = <T>(initialIterable?: Iterable<T> | null | undefined) => {
  const forceUpdate = useForceUpdate()

  const setRef = React.useRef(new Set(initialIterable))

  const addValue = useCallbackRef((...values: T[]) => {
    values.forEach(value => {
      setRef.current.add(value)
    })

    forceUpdate()
  })

  const deleteValue = useCallbackRef((...values: T[]) => {
    values.forEach(value => {
      setRef.current.delete(value)
    })

    forceUpdate()
  })

  const clearSet = useCallbackRef(() => {
    setRef.current.clear()
    forceUpdate()
  })

  const hasValue = useCallbackRef((...values: T[]) => {
    return values.every(value => setRef.current.has(value))
  })

  const reactiveSet = {
    add: addValue,
    clear: clearSet,
    delete: deleteValue,
    has: hasValue,
    size: 0,
    entries: setRef.current.entries.bind(setRef.current),
    forEach: setRef.current.forEach.bind(setRef.current),
    keys: setRef.current.keys.bind(setRef.current),
    values: setRef.current.values.bind(setRef.current),
  }

  Reflect.defineProperty(reactiveSet, 'size', {
    get: () => setRef.current.size,
    configurable: false,
  })

  return reactiveSet
}

export { useSet }
