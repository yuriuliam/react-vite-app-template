import React from 'react'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { useUserMe } from '@/modules/users/data/hooks/useUserMe'
import { useUserToken } from '@/modules/users/data/hooks/useUserToken'

import { AuthContextProvider } from '../../infra/contexts/auth'
import { useAuthServices } from '../../infra/hooks/useAuthServices'

const AUTH_PROVIDER_NAME = 'Modules.Auth.Provider'

const AuthProvider: React.PFC = ({ children }) => {
  const { authenticateUser, authParamsSchema } = useAuthServices()

  const [user, setUser] = useUserMe()
  const [token, setToken] = useUserToken()

  const isAuthenticated = React.useMemo(() => !!(token && user), [token, user])

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
