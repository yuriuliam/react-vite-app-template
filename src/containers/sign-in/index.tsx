import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { AppRoute } from '@/config/routes'

import { Form } from '@/data/forms/components/Form'
import { Input } from '@/data/forms/components/Input'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { useConst } from '@/infra/react/hooks/useConst'

import { useAuth } from '@/modules/auth/infra/contexts/auth'

import { Button } from '../shared/components/Button'

const SIGN_IN_NAME = 'Containers.SignIn.Root'

const SignInPage: React.FC = () => {
  const defaultAuthParams = useConst<App.Modules.Auth.AppAuthenticationParams>({
    email: 'mocked@yahoo.com',
    password: 'mocked@foobar',
  })

  const { isAuthenticated, signIn } = useAuth(SIGN_IN_NAME)

  const navigate = useNavigate()

  const handleSignIn = useCallbackRef(
    (params: App.Modules.Auth.AppAuthenticationParams) => {
      void signIn(params)
    },
  )

  React.useEffect(() => {
    if (!isAuthenticated) return

    navigate(AppRoute.Root)
  }, [isAuthenticated, navigate])

  return (
    <Flex align="center" direction="column">
      <Section>
        <Text>Sign In Page</Text>
      </Section>

      <Section>
        <Form onSubmit={handleSignIn} initialData={defaultAuthParams}>
          <Flex direction="column">
            <Input
              autoComplete="email"
              label="Email"
              name="email"
              type="email"
              placeholder="Insert your email"
            />

            <Input
              autoComplete="current-password"
              label="Password"
              name="password"
              type="password"
              placeholder="Insert your password"
            />
          </Flex>

          <Flex align="center" direction="column" mt="6">
            <Button type="submit">Sign in</Button>
          </Flex>
        </Form>
      </Section>
    </Flex>
  )
}
SignInPage.displayName = SIGN_IN_NAME

export { SignInPage }
