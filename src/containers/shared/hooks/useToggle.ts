import React from 'react'

/**
 * a simplified way to use reactive states with
 * boolean values.
 */
const useToggle = (init: boolean | App.Utils.InitFn<boolean> = false) => {
  const [value, setValue] = React.useState(init)

  const handleToggle = React.useCallback((newValue?: boolean | undefined) => {
    setValue(oldValue => newValue ?? !oldValue)
  }, [])

  return [value, handleToggle] as const
}

export { useToggle }
