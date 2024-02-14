import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { useFeatures } from '@/modules/features/infra/contexts/features/context'

import { Button } from '../shared/components/Button'

const HOME_PAGE_NAME = 'Containers.Home.Root'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const { hasFeatures } = useFeatures(HOME_PAGE_NAME)

  const handleSignOut = useCallbackRef(() => {
    navigate('/sign-out')
  })

  const hasHelloWorld = hasFeatures('ff_hello_world')

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
HomePage.displayName = HOME_PAGE_NAME

export { HomePage }
