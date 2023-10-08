import React from 'react'

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