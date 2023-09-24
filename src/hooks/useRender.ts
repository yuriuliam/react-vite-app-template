import React from 'react'

/**
 * A practical function to force re-render of a component.
 *
 * It can also count the number of re-renders triggered by them.
 */
const useRender = () => {
  const [renders, dispatchRender] = React.useReducer((v: number) => v + 1, 0)

  const rerender = React.useCallback<Utils.CallbackFn>(() => {
    dispatchRender()
  }, [])

  return [renders, rerender] as const
}

export { useRender }
