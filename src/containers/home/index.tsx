import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Flex, Section, Text } from '@radix-ui/themes'

import { AppRoute } from '@/domain/app/enums/AppRoute'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { useAuth } from '@/modules/auth/infra/contexts/auth'
import { FeatureCode } from '@/modules/features/domain/enums/FeatureCode'
import { useFeatures } from '@/modules/features/infra/contexts/features'

import { Button } from '../shared/components/Button'

const HOME_PAGE_NAME = 'Containers.Home.Root'

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const { user } = useAuth(HOME_PAGE_NAME)
  const { hasFeatures } = useFeatures(HOME_PAGE_NAME)

  const handleSignOut = useCallbackRef(() => {
    navigate(AppRoute.SignOut)
  })

  const hasUserName = hasFeatures(FeatureCode.ShowUserName)

  return (
    <Flex align="center" direction="column">
      <Section>
        <Flex align="center" direction="column">
          <Text>Home Page</Text>

          {hasUserName && <Text>Hello, {user!.name}</Text>}
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
