import { Flex, Section, Text } from '@radix-ui/themes'

import { RoutePaths } from '@/data/router/enums/RoutePaths'
import { createPage } from '@/data/router/subjects/createPage'

import { Button } from '@/infra/theme/components/Button'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { Greetings } from './components/Greetings'

const HOME_PAGE_NAME = 'Containers.Home.Root'

const HomePage = createPage(({ navigateTo }) => {
  const handleSignOut = useCallbackRef(() => {
    navigateTo(RoutePaths.SignOut, {})
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
})
HomePage.displayName = HOME_PAGE_NAME

export { HomePage }
