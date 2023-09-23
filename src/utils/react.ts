import { isFunction } from './functions'

import type React from 'react'

type PossibleRef<T> = React.Ref<T> | undefined

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

export { composeRefs }
