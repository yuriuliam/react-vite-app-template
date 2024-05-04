import { useNavigate } from 'react-router-dom'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

import { type RoutePaths } from '../enums/RoutePaths'
import { parseRoutePath } from '../utils/parseRoutePath'

const useNavigateTo: App.Modules.Routing.UseNavigateToFn<RoutePaths> = () => {
  const navigate = useNavigate()

  return useCallbackRef<App.Modules.Routing.NavigateToFn<RoutePaths>>(
    (route, { params = {}, search = new URLSearchParams(), ...rest }) => {
      navigate({
        ...rest,
        pathname: parseRoutePath(route, params),
        search: search ? `?${search.toString()}` : undefined,
      })
    },
  )
}

export { useNavigateTo }
