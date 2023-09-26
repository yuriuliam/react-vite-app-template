import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/contexts/auth/context'

import { COMPONENTS, ROUTES } from '@/utils/constants'

/**
 * A pseudo-layout created to middleware authentication.
 */
const Auth: React.FC = () => {
  const { isAuthenticated } = useAuth(COMPONENTS.NAMES.AUTH_LAYOUT)

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />
}
Auth.displayName = COMPONENTS.NAMES.AUTH_LAYOUT

export { Auth }
