import React from 'react'

import { useAtom } from 'jotai'

import { AuthContextProvider } from './context'

import { useAPI } from '../../hooks/useAPI'
import { useLogger } from '../../hooks/useLogger'

import { atoms } from '../../services/store/atoms'

import { LOGGER } from '../../utils/constants'

const AuthProvider: React.PFC = ({ children }) => {
  const logger = useLogger(LOGGER.NAMESPACES.AUTH)
  const api = useAPI()

  const [user, setUser] = useAtom(atoms.auth.user)
  const [token, setToken] = useAtom(atoms.auth.token)

  const signIn = React.useCallback(async () => {
    const data = await api.getAuthUser()

    if (!data) {
      logger.error({
        name: 'AuthProvider',
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
      name: 'AuthProvider',
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
      user={user}
      token={token}
    >
      {children}
    </AuthContextProvider>
  )
}
AuthProvider.displayName = 'App.AuthProvider'

export { AuthProvider }
