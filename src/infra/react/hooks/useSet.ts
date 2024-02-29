import { useCallbackRef } from './useCallbackRef'
import { useConst } from './useConst'
import { useForceUpdate } from './useForceUpdate'

/**
 * Creates a `Set<T>` which works with React updates.
 *
 * @returns a collection of functions and properties to interact with the set.
 */
const useSet = <T>(iterable?: Iterable<T> | null | undefined) => {
  const forceUpdate = useForceUpdate()

  const set = useConst(new Set(iterable))

  const addValue = useCallbackRef((...values: T[]) => {
    values.forEach(value => {
      set.add(value)
    })

    forceUpdate()
  })

  const deleteValue = useCallbackRef((...values: T[]) => {
    values.forEach(value => {
      set.delete(value)
    })

    forceUpdate()
  })

  const clearSet = useCallbackRef(() => {
    set.clear()
    forceUpdate()
  })

  const hasValue = useCallbackRef((...values: T[]) =>
    values.every(value => set.has(value)),
  )

  const reactiveSet = {
    add: addValue,
    clear: clearSet,
    delete: deleteValue,
    has: hasValue,
    size: 0,
    entries: set.entries.bind(set),
    forEach: set.forEach.bind(set),
    keys: set.keys.bind(set),
    values: set.values.bind(set),
  }

  Reflect.defineProperty(reactiveSet, 'size', {
    get: () => set.size,
    configurable: false,
  })

  return reactiveSet
}

export { useSet }
