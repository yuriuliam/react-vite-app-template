import React from 'react'

const useRender = () => {
  const [renders, dispatchRender] = React.useReducer((v: number) => v + 1, 0)

  const rerender = React.useCallback<Utils.ActionFn>(() => {
    dispatchRender()
  }, [])

  return {
    renderCount: renders,
    rerender,
  }
}

export { useRender }
