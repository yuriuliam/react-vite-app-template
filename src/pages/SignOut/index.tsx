import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@/contexts/auth/context'
import { useFeatures } from '@/contexts/features/context'

import { COMPONENTS, ROUTES } from '@/utils/constants'

/**
 * A page which sign-outs. Originally created if you wish to show something
 * to the user, otherwise you can use router's loader system.
 *
 * @see https://reactrouter.com/en/main/route/loader
 */
const SignOut: React.FC = () => {
  const { signOut } = useAuth(COMPONENTS.NAMES.SIGN_OUT_PAGE)
  const { clearFeatures } = useFeatures(COMPONENTS.NAMES.SIGN_OUT_PAGE)

  const navigate = useNavigate()

  React.useLayoutEffect(() => {
    clearFeatures()
    signOut()

    navigate(ROUTES.ROOT)
  }, [clearFeatures, navigate, signOut])

  return <></>
}
SignOut.displayName = COMPONENTS.NAMES.SIGN_OUT_PAGE

export { SignOut }
