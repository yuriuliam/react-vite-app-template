import React from 'react'

/**
 * Same as useCallback, but saves the callback into a ref.
 *
 * It will reassign the ref every effect without triggering rerenders.
 *
 * @param callback The callback to serve as the function.
 */
const useCallbackRef = <T extends (...args: any[]) => any>(callback: T) => {
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  })

  return React.useMemo(
    () => ((...args) => callbackRef.current?.(...args)) as T,
    [],
  )
}

export { useCallbackRef }
