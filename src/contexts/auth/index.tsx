import React from 'react'

import { useAtom } from 'jotai'

import { AuthContextProvider } from './context'

import { useAPI } from '@/hooks/useAPI'
import { useLogger } from '@/hooks/useLogger'

import { atoms } from '@/services/store/atoms'

import { COMPONENTS, LOGGER } from '@/utils/constants'

const AuthProvider: React.PFC = ({ children }) => {
  const logger = useLogger(LOGGER.NAMESPACES.AUTH)
  const api = useAPI()

  const [user, setUser] = useAtom(atoms.auth.user)
  const [token, setToken] = useAtom(atoms.auth.token)

  const isAuthenticated = React.useMemo(() => !!(token && user), [token, user])

  const signIn = React.useCallback(async () => {
    const data = await api.authenticate()

    if (!data) {
      logger.error({
        name: COMPONENTS.NAMES.AUTH_PROVIDER,
        content: "Couldn't authenticate user",
        data,
      })

      setToken(null)
      setUser(null)
      return
    }

    const { token, ...authUser } = data

    setUser(authUser)
    setToken(token)
  }, [api, logger, setToken, setUser])

  const signOut = React.useCallback(() => {
    logger.log({
      name: COMPONENTS.NAMES.AUTH_PROVIDER,
      title: 'signOut::()',
      content: 'de-authenticating current user',
    })

    setToken(null)
    setUser(null)
  }, [logger, setToken, setUser])

  return (
    <AuthContextProvider
      signIn={signIn}
      signOut={signOut}
      isAuthenticated={isAuthenticated}
      user={user}
      token={token}
    >
      {children}
    </AuthContextProvider>
  )
}
AuthProvider.displayName = COMPONENTS.NAMES.AUTH_PROVIDER

export { AuthProvider }
