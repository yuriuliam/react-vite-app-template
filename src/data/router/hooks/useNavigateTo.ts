import { useNavigate } from 'react-router-dom'

import { parseParamsIntoPathname } from '@/data/router/subjects/parseParamsIntoPathname'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

const useNavigateTo: App.Domain.Router.UseNavigateToFn = () => {
  const navigate = useNavigate()

  return useCallbackRef<App.Domain.Router.NavigateToFn>(
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
