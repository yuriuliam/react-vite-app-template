import React from 'react'

import { RoutePaths } from '@/data/router/enums/RoutePaths'
import { createPage } from '@/data/router/subjects/createPage'

import { useAuth } from '@/modules/auth/data/contexts/auth'

const SIGN_OUT_NAME = 'Containers.SignOut.Root'

/**
 * A page which sign-outs. Originally created if you wish to show something
 * to the user, otherwise you can use router's loader system.
 * @see https://reactrouter.com/en/main/route/loader
 */
const SignOutPage = createPage(({ navigateTo }) => {
  const { signOut } = useAuth(SIGN_OUT_NAME)

  React.useEffect(() => {
    signOut()

    navigateTo(RoutePaths.Home, {})
  }, [navigateTo, signOut])

  return <></>
})
SignOutPage.displayName = SIGN_OUT_NAME

export { SignOutPage }
