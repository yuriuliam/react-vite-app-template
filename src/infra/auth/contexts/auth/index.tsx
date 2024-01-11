import React from 'react'

import { AuthContextProvider, type SignInParams } from './context'

import { useLogger } from '@/infra/logger/hooks/useLogger'
import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { useUserMe } from '@/modules/users/infra/hooks/useUserMe'
import { useUserToken } from '@/modules/users/infra/hooks/useUserToken'
import { authenticateUser } from '@/modules/users/infra/services/authenticateUserService'
import { validateAuthenticationParams } from '@/modules/users/infra/services/validateAuthenticationParams'

const AUTH_PROVIDER_NAME = 'Providers.Auth'
const AUTH_PROVIDER_LOGGER_NAME = 'providers:auth'

const AuthProvider: React.PFC = ({ children }) => {
  const logger = useLogger(AUTH_PROVIDER_LOGGER_NAME)

  const [user, setUser] = useUserMe()
  const [token, setToken] = useUserToken()

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
