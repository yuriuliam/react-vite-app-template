import React from 'react'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { useUserMe } from '@/modules/users/infra/hooks/useUserMe'
import { useUserToken } from '@/modules/users/infra/hooks/useUserToken'

import { useAuthServices } from '../../hooks/useAuthServices'
import { AuthContextProvider } from './context'

const AUTH_PROVIDER_NAME = 'Providers.Auth'

const AuthProvider: React.PFC = ({ children }) => {
  const { authenticateUser, validateAuthenticationParams } = useAuthServices()

  const [user, setUser] = useUserMe()
  const [token, setToken] = useUserToken()

  const isAuthenticated = React.useMemo(() => !!(token && user), [token, user])

  const signIn = useCallbackRef(
    async (params: App.Modules.Auth.AuthenticationParamsModel) => {
      validateAuthenticationParams(params)

      const data = await authenticateUser(params)

      if (!data) {
        setToken(null)
        setUser(null)
        return
      }

      const { token, ...authUser } = data

      setUser(authUser)
      setToken(token)
    },
  )

  const signOut = useCallbackRef(() => {
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
