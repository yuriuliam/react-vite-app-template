import React from 'react'

/**
 * A simple function to force a component to re-render.
 */
const useForceUpdate = () => {
  const [, forceUpdate] = React.useReducer(() => ({}), {})

  return React.useCallback(() => {
    forceUpdate()
  }, [])
}

export { useForceUpdate }
