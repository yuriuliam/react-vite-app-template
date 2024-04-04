import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { getComponentDisplayName } from '@/shared/utils/react'

import { type RoutePaths } from '../enums/RoutePaths'
import { useNavigateTo } from '../hooks/useNavigateTo'

type CreatePageFn = App.Domain.Router.CreatePageFn<RoutePaths>

const createPage: CreatePageFn = PageComponent => {
  const Page: React.FC = () => {
    const routeParams = useParams<Record<any, any>>()
    const [searchParams, setSearchParams] = useSearchParams()

    const navigateTo = useNavigateTo()

    return (
      <PageComponent
        navigateTo={navigateTo}
        routeParams={routeParams}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    )
  }
  Page.displayName = getComponentDisplayName(PageComponent)

  return Page
}

export { createPage }