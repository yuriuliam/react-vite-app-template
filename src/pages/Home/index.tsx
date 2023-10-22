import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/components/Button'

import { useFeatures } from '@/contexts/features/context'

import { useCallbackRef } from '@/hooks/useCallbackRef'

import { COMPONENTS, FEATURES, ROUTES } from '@/utils/constants'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const { hasFeatures } = useFeatures(COMPONENTS.NAMES.HOME_PAGE)

  const handleSignOut = useCallbackRef(() => {
    navigate(ROUTES.SIGN_OUT)
  })

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
