import React from 'react'

import { useUserMe } from '@/modules/users/infra/atoms/userMe'
import { useUserToken } from '@/modules/users/infra/atoms/userToken'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { AuthContextProvider } from '../../data/contexts/auth'
import { authenticateUser } from '../authenticateUserService'
import { authParamsSchema } from '../authParamsSchema'

const AUTH_PROVIDER_NAME = 'Modules.Auth.Provider'

const AuthProvider: React.PFC = ({ children }) => {
  const [user, setUser] = useUserMe()
  const [token, setToken] = useUserToken()

  const signIn = useCallbackRef<App.Modules.Auth.SignInFn>(async params => {
    authParamsSchema.parse(params)

    const data = await authenticateUser(params)

    if (!data) {
      setToken(null)
      setUser(null)
      return
    }

    const { token, ...authUser } = data

    setUser(authUser)
    setToken(token)
  })

  const signOut = useCallbackRef<App.Modules.Auth.SignOutFn>(() => {
    setToken(null)
    setUser(null)
  })

  const isAuthenticated = React.useMemo(() => !!(token && user), [token, user])

  return (
    <AuthContextProvider
      isAuthenticated={isAuthenticated}
      signIn={signIn}
      signOut={signOut}
      user={user}
      token={token}
    >
      {children}
    </AuthContextProvider>
  )
}
AuthProvider.displayName = AUTH_PROVIDER_NAME

export { AuthProvider }
