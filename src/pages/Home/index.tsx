import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/components/Button'

import { useCallbackRef } from '@/hooks/useCallbackRef'

import { COMPONENTS, ROUTES } from '@/utils/constants'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleSignOut = useCallbackRef(() => {
    navigate(ROUTES.SIGN_OUT, { replace: true })
  })

  return (
    <Flex align="center" direction="column">
      <Section>
        <Text>Home Page</Text>
      </Section>
      <Section>
        <Button onClick={handleSignOut}>Sign-out</Button>
      </Section>
    </Flex>
  )
}
Home.displayName = COMPONENTS.NAMES.HOME

export { Home }
