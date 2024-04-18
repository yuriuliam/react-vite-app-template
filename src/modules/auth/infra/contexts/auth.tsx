import React from 'react'

import { useUserMe } from '@/modules/users/infra/atoms/userMe'
import { useUserToken } from '@/modules/users/infra/atoms/userToken'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { AuthContextProvider } from '../../data/contexts/auth'
import { authenticateUserService } from '../authenticateUserService'

const AUTH_PROVIDER_NAME = 'Modules.Auth.Provider'

const AuthProvider: React.PFC = ({ children }) => {
  const [token, setToken] = useUserToken()
  const [user, setUser] = useUserMe()

  const signIn = useCallbackRef<App.Modules.Auth.SignInFn>(async params => {
    const data = await authenticateUserService(params)

    if (!data) {
      setToken(null)
      setUser(null)
      return
    }

    const { token, ...authUser } = data

    setToken(token)
    setUser(authUser)
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
      token={token}
      user={user}
    >
      {children}
    </AuthContextProvider>
  )
}
AuthProvider.displayName = AUTH_PROVIDER_NAME

export { AuthProvider }
