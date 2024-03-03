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

  set.add = (...args) => {
    const result = Set.prototype.add.apply(set, args)
    forceUpdate()

    return result
  }

  set.delete = (...args) => {
    const result = Set.prototype.delete.apply(set, args)

    forceUpdate()

    return result
  }

  set.clear = (...args) => {
    Set.prototype.clear.apply(set, args)
    forceUpdate()
  }

  return set
}

export { useSet }
