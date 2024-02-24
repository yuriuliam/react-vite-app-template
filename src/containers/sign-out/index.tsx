import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AppRoute } from '@/config/routes'

import { useAuth } from '@/modules/auth/infra/contexts/auth'

const SIGN_OUT_NAME = 'Containers.SignOut.Root'

/**
 * A page which sign-outs. Originally created if you wish to show something
 * to the user, otherwise you can use router's loader system.
 * @see https://reactrouter.com/en/main/route/loader
 */
const SignOutPage: React.FC = () => {
  const { signOut } = useAuth(SIGN_OUT_NAME)

  const navigate = useNavigate()

  React.useEffect(() => {
    signOut()

    navigate(AppRoute.Root)
  }, [navigate, signOut])

  return <></>
}
SignOutPage.displayName = SIGN_OUT_NAME

export { SignOutPage }
