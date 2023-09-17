import React from 'react'

function createContext<T extends Record<string, any>>(
  initialValue: T | null,
  componentName: string,
) {
  const Context = React.createContext(initialValue as T)

  const Provider: React.PFC<Partial<T>> = ({ children, ...rest }) => {
    const values = React.useMemo(
      () => (Object.keys(rest).length ? rest : initialValue) as T,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(rest),
    )

    return <Context.Provider value={values}>{children}</Context.Provider>
  }
  Provider.displayName = `App.ContextProvider.${componentName}`

  const useContext = (consumerName: string) => {
    const contextValue = React.useContext(Context)

    if (!initialValue && !contextValue) {
      throw new Error(`${consumerName} must be wrapped within ${componentName}`)
    }

    return contextValue
  }

  return [Provider, useContext] as const
}

export { createContext }
