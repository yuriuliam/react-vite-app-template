import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/contexts/auth/context'

import { COMPONENTS, ROUTES } from '@/utils/constants'

/**
 * A pseudo-page which sign-outs the current user and redirect to the root.
 */
const SignOut: React.FC = () => {
  const navigate = useNavigate()
  const { signOut } = useAuth(COMPONENTS.NAMES.SIGN_OUT)

  React.useLayoutEffect(() => {
    signOut()

    navigate(ROUTES.ROOT)
  }, [navigate, signOut])

  return <></>
}
SignOut.displayName = COMPONENTS.NAMES.SIGN_OUT

export { SignOut }
