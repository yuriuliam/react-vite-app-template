import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { getComponentDisplayName } from '@/shared/utils/react'

import { useNavigateTo } from '../hooks/useNavigateTo'

const createPage: App.Domain.Router.CreatePageFn = PageComponent => {
  const Page: React.FC = () => {
    const params = useParams<Record<any, any>>()
    const [search] = useSearchParams()

    const navigateTo = useNavigateTo()

    return (
      <PageComponent navigateTo={navigateTo} params={params} search={search} />
    )
  }
  Page.displayName = getComponentDisplayName(PageComponent)

  return Page
}

export { createPage }
