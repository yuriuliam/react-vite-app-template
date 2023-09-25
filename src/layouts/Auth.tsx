import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from '@/contexts/auth/context'

import { COMPONENTS, ROUTES } from '@/utils/constants'

/**
 * A pseudo-layout created to middleware authentication.
 */
const Auth: React.FC = () => {
  const { isAuthenticated } = useAuth(COMPONENTS.NAMES.AUTH_LAYOUT)
  const location = useLocation()

  const isSignIn = location.pathname === ROUTES.SIGN_IN

  const privateRoute = isSignIn ? <Navigate to={ROUTES.ROOT} /> : <Outlet />

  return isAuthenticated ? privateRoute : <Navigate to={ROUTES.SIGN_IN} />
}
Auth.displayName = COMPONENTS.NAMES.AUTH_LAYOUT

export { Auth }
