import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '@/contexts/auth/context'

import { COMPONENTS, ROUTES } from '@/utils/constants'

/**
 * A pseudo-layout created to middleware authentication.
 */
const Auth: React.FC = () => {
  const { token, user } = useAuth(COMPONENTS.NAMES.AUTH_LAYOUT)
  const location = useLocation()

  const isAuthenticated = !!(token && user)
  const isSignIn = location.pathname === ROUTES.SIGN_IN

  return isAuthenticated ? (
    <>{isSignIn ? <Navigate to={ROUTES.ROOT} /> : <Outlet />}</>
  ) : (
    <Navigate to={ROUTES.SIGN_IN} />
  )
}
Auth.displayName = COMPONENTS.NAMES.AUTH_LAYOUT

export { Auth }
