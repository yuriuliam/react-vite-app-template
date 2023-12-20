import React from 'react'

import { isFunction } from '@/shared/utils/functions'

const UNDEF = Symbol.for('UNDEFINED_REF_VALUE') as any

/**
 * Creates an immutable value.
 * It can receive an Initial value or a Initializer Function.
 *
 * The value is only computed once.
 */
const useConst = <T>(init: T | App.InitFn<T>) => {
  const ref = React.useRef<T>(UNDEF)

  if (ref.current === UNDEF) {
    ref.current = isFunction(init) ? init() : init
  }

  return ref.current
}

export { useConst }
