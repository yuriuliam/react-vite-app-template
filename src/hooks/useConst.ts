import React from 'react'

import { isFunction } from '@/utils/functions'

/**
 * Creates an immutable value.
 * It can receive an Initial value or a Initializer Function.
 *
 * If for any circumstances the value is `null`,
 * the initial value will be recomputed until it gets something
 * different.
 *
 * @param init an initial value or an initializer function
 * @returns the initialized value
 */
const useConst = <T>(init: T | AppUtils.InitFn<T>) => {
  const ref = React.useRef<T | null>(null)

  if (ref.current === null) {
    ref.current = isFunction(init) ? init() : init
  }

  return ref.current
}

export { useConst }
