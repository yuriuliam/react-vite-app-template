import React from 'react'

import { Flex, Section, Text } from '@radix-ui/themes'

import { Button } from '@/infra/theme/components/Button'

import { useAuth } from '@/modules/auth/data/contexts/auth'
import { AuthForm } from '@/modules/auth/infra/contexts/auth-form'
import { RoutePaths } from '@/modules/routing/data/enums/RoutePaths'
import { createPage } from '@/modules/routing/data/subjects/createPage'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'
import { useConst } from '@/shared/hooks/useConst'

const SIGN_IN_NAME = 'Containers.SignIn.Root'

const SignInPage = createPage(({ navigateTo }) => {
  const defaultAuthParams = useConst<App.Modules.Auth.AuthParamsModel>({
    email: 'mocked@yahoo.com',
    password: 'mocked@foobar',
  })

  const { isAuthenticated, signIn } = useAuth(SIGN_IN_NAME)

  const handleSignIn = useCallbackRef(
    (params: App.Modules.Auth.AuthParamsModel) => {
      void signIn(params)
    },
  )

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
        <AuthForm.Root onValidSubmit={handleSignIn}>
          <Flex direction="column">
            <AuthForm.Input
              autoComplete="email"
              defaultValue={defaultAuthParams.email}
              label="Email"
              name="email"
              type="email"
              placeholder="Insert your email"
              required
            />

            <AuthForm.Input
              autoComplete="current-password"
              defaultValue={defaultAuthParams.password}
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
