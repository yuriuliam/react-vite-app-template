import React from 'react'

import { useCallbackRef } from './useCallbackRef'

/**
 * a simplified way to use reactive states with
 * boolean values.
 */
const useToggle = (init: boolean | AppUtils.InitFn<boolean> = false) => {
  const [value, setValue] = React.useState(init)

  const handleToggle = useCallbackRef((newValue?: boolean | undefined) => {
    setValue(oldValue => newValue ?? !oldValue)
  })

  return [value, handleToggle] as const
}

export { useToggle }
