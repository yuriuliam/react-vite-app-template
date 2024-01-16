import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { useAuth } from '@/modules/auth/infra/contexts/auth/context'

import { Button } from '../shared/components/Button'

const SIGN_IN_NAME = 'SignIn.Root'

const SignInPage: React.FC = () => {
  const { isAuthenticated, signIn } = useAuth(SIGN_IN_NAME)

  const navigate = useNavigate()

  const handleSignIn = useCallbackRef(async () => {
    // TODO: implement actual forms instead of mocking
    const authParams = {
      email: 'Lukas_Kirlin@yahoo.com',
      password: 'limivuro',
    } satisfies App.Modules.Auth.AuthenticationParamsModel

    await signIn(authParams)

    navigate('/')
  })

  React.useEffect(() => {
    if (!isAuthenticated) return

    navigate('/')
  }, [isAuthenticated, navigate])

  return (
    <Flex align="center" direction="column">
      <Section>
        <Text>Sign In Page</Text>
      </Section>

      <Section>
        <Button onClick={() => void handleSignIn()}>Sign in</Button>
      </Section>
    </Flex>
  )
}
SignInPage.displayName = SIGN_IN_NAME

export { SignInPage }
