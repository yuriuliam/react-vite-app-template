import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '../contexts/auth/context'

import { ROUTES } from '../utils/constants'

/**
 * A pseudo-layout created to middleware authentication.
 */
const AuthLayout: React.FC = () => {
  const { token, user } = useAuth('Routes')
  const location = useLocation()

  const isAuthenticated = !!(token && user)
  const isSignIn = location.pathname === ROUTES.SIGN_IN

  return isAuthenticated ? (
    <>{isSignIn ? <Navigate to={ROUTES.ROOT} /> : <Outlet />}</>
  ) : (
    <Navigate to={ROUTES.SIGN_IN} />
  )
}
AuthLayout.displayName = 'App.AuthLayout'

export { AuthLayout }
