import React from 'react'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/infra/theme/components/Button'

import { useAuth } from '@/modules/auth/data/contexts/auth'
import { AuthForm } from '@/modules/auth/infra/contexts/auth-form'
import { RoutePaths } from '@/modules/routing/data/enums/RoutePaths'
import { createPage } from '@/modules/routing/data/subjects/createPage'

import { useConst } from '@/shared/hooks/useConst'

const SIGN_IN_NAME = 'Containers.SignIn.Root'

const SignInPage = createPage(({ navigateTo }) => {
  const defaultAuthParams = useConst<App.Modules.Auth.AuthParamsModel>({
    email: 'mocked@yahoo.com',
    password: 'foobar123',
  })

  const { isAuthenticated, signIn } = useAuth(SIGN_IN_NAME)

  React.useEffect(() => {
    if (!isAuthenticated) return

    navigateTo(RoutePaths.Home, {})
  }, [isAuthenticated, navigateTo])

  return (
    <Flex align="center" direction="column">
      <Section>
        <Text>Sign In Page</Text>
      </Section>

      <Section>
        <AuthForm.Root defaultValues={defaultAuthParams} onValidSubmit={signIn}>
          <Flex direction="column">
            <AuthForm.Input
              autoComplete="email"
              label="Email"
              name="email"
              type="email"
              placeholder="Insert your email"
              required
            />

            <AuthForm.Input
              autoComplete="current-password"
              label="Password"
              name="password"
              type="password"
              placeholder="Insert your password"
              required
            />
          </Flex>

          <Flex align="center" direction="column" mt="6">
            <Button type="submit">Sign in</Button>
          </Flex>
        </AuthForm.Root>
      </Section>
    </Flex>
  )
})
SignInPage.displayName = SIGN_IN_NAME

export { SignInPage }
