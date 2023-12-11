import React from 'react'

import { isFunction } from '@/shared/utils/functions'

const UNDEF = Symbol.for('UNDEFINED_REF_VALUE') as any

/**
 * Creates an immutable value.
 * It can receive an Initial value or a Initializer Function.
 *
 * If for any circumstances the value is `undefined`,
 * the initial value will be recomputed until it gets something
 * different without triggering rerenders.
 *
 * @param init an initial value or an initializer function
 * @returns the initialized value
 */
const useConst = <T>(init: T | App.InitFn<T>) => {
  const ref = React.useRef<T>(UNDEF)

  if (ref.current === UNDEF) {
    ref.current = isFunction(init) ? init() : init
  }

  return ref.current
}

export { useConst }
