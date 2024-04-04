import { useNavigate } from 'react-router-dom'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { type RoutePaths } from '../enums/RoutePaths'
import { parseRoutePath } from '../utils/parseRoutePath'

const useNavigateTo: App.Domain.Router.UseNavigateToFn<RoutePaths> = () => {
  const navigate = useNavigate()

  return useCallbackRef<App.Domain.Router.NavigateToFn<RoutePaths>>(
    (route, { params = {}, search = new URLSearchParams(), ...rest }) => {
      navigate({
        ...rest,
        pathname: parseRoutePath(route, params as any),
        search: search ? `?${search.toString()}` : undefined,
      })
    },
  )
}

export { useNavigateTo }
