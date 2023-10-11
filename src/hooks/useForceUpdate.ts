import React from 'react'

import { useCallbackRef } from './useCallbackRef'

/**
 * A practical function to force re-render of a component.
 *
 * It can also count the number of re-renders triggered by them.
 */
const useForceUpdate = () => {
  const [, forceUpdate] = React.useReducer(() => ({}), {})
  return useCallbackRef(() => {
    forceUpdate()
  })
}

export { useForceUpdate }
