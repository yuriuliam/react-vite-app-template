import { isFunctionType } from '@/shared/utils/functions'

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

export { composeRefs }
