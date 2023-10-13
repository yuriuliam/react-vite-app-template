import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/components/Button'

import { useAuth } from '@/contexts/auth/context'
import { useFeatures } from '@/contexts/features/context'

import { useCallbackRef } from '@/hooks/useCallbackRef'

import { COMPONENTS, FEATURES, ROUTES } from '@/utils/constants'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const { isAuthenticated, token } = useAuth(COMPONENTS.NAMES.HOME_PAGE)
  const { fetchFeatures, hasFeatures } = useFeatures(COMPONENTS.NAMES.HOME_PAGE)

  const handleSignOut = useCallbackRef(() => {
    navigate(ROUTES.SIGN_OUT)
  })

  React.useEffect(() => {
    if (!isAuthenticated) return

    void fetchFeatures(token)
  }, [fetchFeatures, isAuthenticated, token])

  const hasHelloWorld = hasFeatures(FEATURES.HELLO_WORLD)

  return (
    <Flex align="center" direction="column">
      <Section>
        <Flex align="center" direction="column">
          <Text>Home Page</Text>
          {hasHelloWorld && <Text>(Hello World!)</Text>}
        </Flex>
      </Section>
      <Section>
        <Button onClick={handleSignOut}>Sign-out</Button>
      </Section>
    </Flex>
  )
}
Home.displayName = COMPONENTS.NAMES.HOME_PAGE

export { Home }
