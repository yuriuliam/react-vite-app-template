import { useNavigate } from 'react-router-dom'

import { parseParamsIntoPathname } from '@/data/router/subjects/parseParamsIntoPathname'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { type RoutePaths } from '../enums/RoutePaths'

const useNavigateTo: App.Domain.Router.UseNavigateToFn<RoutePaths> = () => {
  const navigate = useNavigate()

  return useCallbackRef<App.Domain.Router.NavigateToFn<RoutePaths>>(
    (route, { params = {}, search = new URLSearchParams(), ...rest }) => {
      navigate({
        ...rest,
        pathname: parseParamsIntoPathname(route, params as any),
        search: (search ?? '').toString(),
      })
    },
  )
}

export { useNavigateTo }
