import React from 'react'

/**
 * a simplified way to use reactive states with
 * boolean values.
 */
const useToggle = (init: boolean | App.InitFn<boolean> = false) => {
  const [value, setValue] = React.useState(init)

  const toggleValue = React.useCallback((newValue?: boolean | undefined) => {
    setValue(oldValue => newValue ?? !oldValue)
  }, [])

  return [value, toggleValue] as const
}

export { useToggle }
