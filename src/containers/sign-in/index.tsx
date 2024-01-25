import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Form } from '@/infra/form/components/Form'
import { Input } from '@/infra/form/components/Input'
import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { useConst } from '@/infra/react/hooks/useConst'

import { useAuth } from '@/modules/auth/infra/contexts/auth/context'

import { Button } from '../shared/components/Button'

const SIGN_IN_NAME = 'SignIn.Root'

const SignInPage: React.FC = () => {
  const defaultAuthParams = useConst({
    email: 'Lukas_Kirlin@yahoo.com',
    password: 'limivuro',
  } satisfies App.Modules.Auth.AuthenticationParamsModel)

  const { isAuthenticated, signIn } = useAuth(SIGN_IN_NAME)

  const navigate = useNavigate()

  const handleSignIn = useCallbackRef(
    async (params: App.Modules.Auth.AuthenticationParamsModel) => {
      await signIn(params)
    },
  )

  React.useEffect(() => {
    if (!isAuthenticated) return

    navigate('/')
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
            />

            <Input
              autoComplete="current-password"
              label="Password"
              name="password"
              type="password"
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
