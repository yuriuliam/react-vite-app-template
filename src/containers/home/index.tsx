import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { AppRoute } from '@/data/app/enums/AppRoute'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { Button } from '../shared/components/Button'
import { Greetings } from './components/Greetings'

const HOME_PAGE_NAME = 'Containers.Home.Root'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const handleSignOut = useCallbackRef(() => {
    navigate(AppRoute.SignOut)
  })

  return (
    <Flex align="center" direction="column">
      <Section>
        <Flex align="center" direction="column">
          <Text>Home Page</Text>

          <Greetings />
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
