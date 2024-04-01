import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { getComponentDisplayName } from '@/shared/utils/react'

import { type RoutePaths } from '../enums/RoutePaths'
import { useNavigateTo } from '../hooks/useNavigateTo'

type CreatePageFn = App.Domain.Router.CreatePageFn<RoutePaths>

const createPage: CreatePageFn = PageComponent => {
  const Page: React.FC = () => {
    const params = useParams<Record<any, any>>()
    const [search, setURLSearchParams] = useSearchParams()

    const navigateTo = useNavigateTo()

    return (
      <PageComponent
        navigateTo={navigateTo}
        params={params}
        search={search}
        setURLSearchParams={setURLSearchParams}
      />
    )
  }
  Page.displayName = getComponentDisplayName(PageComponent)

  return Page
}

export { createPage }
