import React from 'react'

import { useAtom } from 'jotai'

import { userAtoms } from '../../atoms'
import { AuthContextProvider, type SignInParams } from './context'

import { useCallbackRef } from '@/containers/shared/hooks/useCallbackRef'
import { useLogger } from '@/containers/shared/hooks/useLogger'

import {
  authenticateUser,
  validateAuthenticationParams,
} from '@/modules/users/infra/services'

const AUTH_PROVIDER_NAME = 'Providers.Auth'
const AUTH_PROVIDER_LOGGER_NAME = 'providers:auth'

const AuthProvider: React.PFC = ({ children }) => {
  const logger = useLogger(AUTH_PROVIDER_LOGGER_NAME)

  const [user, setUser] = useAtom(userAtoms.user)
  const [token, setToken] = useAtom(userAtoms.token)

  const isAuthenticated = React.useMemo(() => !!(token && user), [token, user])

  const signIn = useCallbackRef(async (params: SignInParams) => {
    validateAuthenticationParams(params)

    const data = await authenticateUser(params)

    if (!data) {
      logger.error({
        name: AUTH_PROVIDER_NAME,
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
  })

  const signOut = useCallbackRef(() => {
    logger.log({
      name: AUTH_PROVIDER_NAME,
      title: 'signOut::()',
      content: "clearing current user's session",
    })

    setToken(null)
    setUser(null)
  })

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
AuthProvider.displayName = AUTH_PROVIDER_NAME

export { AuthProvider }
