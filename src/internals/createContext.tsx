import React from 'react'

import { COMPONENTS } from '@/utils/constants'

/**
 * A small but useful wrapper React's createContext.
 *
 * It creates a Provider capable to receive named properties.
 * You can optionally send a initialValue to get it fulfilled,
 * otherwise set it as `null`.
 *
 * It also creates a React Hook to consume it. If the initialValue
 * is `null` and the hook call occurs outside of the Provider, it
 * will throw an error.
 * This hook requires the consumer name as well, so it can be
 * tracked once an error occurs.
 *
 * It requires you to provide the componentName, which will
 * be used as the contextName, but also the Provider's name.
 *
 * @param initialValue An optional initial value, otherwise set
 * it to `null`
 * @param componentName The context name
 * @returns A Tuple with the Provider and a hook to consume it,
 * respectively.
 */
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
  Provider.displayName = `${COMPONENTS.NAMES.CONTEXT_PROVIDER}.${componentName}`

  const useContext = (consumerName: string) => {
    const contextValue = React.useContext(Context)

    if (!contextValue) {
      throw new Error(`${consumerName} must be wrapped within ${componentName}`)
    }

    return contextValue
  }

  return [Provider, useContext] as const
}

export { createContext }
