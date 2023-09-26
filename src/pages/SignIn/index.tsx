import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/components/Button'

import { useAuth } from '@/contexts/auth/context'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const { isAuthenticated, signIn } = useAuth(COMPONENTS.NAMES.SIGN_IN)

  const handleSignIn = React.useCallback(async () => {
    await signIn()

    navigate(ROUTES.ROOT)
  }, [navigate, signIn])

  React.useEffect(() => {
    if (isAuthenticated) navigate(ROUTES.ROOT)
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
SignIn.displayName = COMPONENTS.NAMES.SIGN_IN

export { SignIn }
