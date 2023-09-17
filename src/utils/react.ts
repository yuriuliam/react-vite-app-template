import { isFunction } from './functions'

import type React from 'react'

/**
 *
 */
const composeRefs = <T>(
  ...refs: Array<React.PossibleRef<T>>
): React.ComposedRefFn<T> => {
  return node => {
    refs.forEach(ref => {
      if (!ref) return

      if (isFunction(ref)) {
        ref(node)
        return
      }

      // eslint-disable-next-line no-extra-semi
      ;(ref as React.MutableRefObject<T>).current = node
    })
  }
}

export { composeRefs }
