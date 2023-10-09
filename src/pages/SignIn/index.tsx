import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/components/Button'

import { useAuth } from '@/contexts/auth/context'
import { useFeatures } from '@/contexts/features/context'

import { useCallbackRef } from '@/hooks/useCallbackRef'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const SignIn: React.FC = () => {
  const { isAuthenticated, signIn, token } = useAuth(COMPONENTS.NAMES.SIGN_IN)
  const { fetchFeatures } = useFeatures(COMPONENTS.NAMES.SIGN_IN)

  const navigate = useNavigate()

  const handleSignIn = useCallbackRef(async () => {
    await signIn()
    await fetchFeatures(token!)

    navigate(ROUTES.ROOT)
  })

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
