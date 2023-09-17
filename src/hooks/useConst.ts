import React from 'react'

import { isFunction } from '../utils/functions'

const useConst = <T>(init: T | Utils.InitFn<T>) => {
  const ref = React.useRef<T | null>(null)

  if (ref.current === null) {
    ref.current = isFunction(init) ? init() : init
  }

  return ref.current
}

export { useConst }
