import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/infra/theme/components/Button'

import { RoutePaths } from '@/modules/routing/data/enums/RoutePaths'
import { createPage } from '@/modules/routing/data/subjects/createPage'

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
