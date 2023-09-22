import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider as ReactRouterDOMRouterProvider,
} from 'react-router-dom'

import { COMPONENTS } from '@/utils/constants'

type RouterProps = Omit<
  React.ComponentProps<typeof ReactRouterDOMRouterProvider>,
  'router'
>

const Router: React.PFC<RouterProps> = ({ children, ...rest }) => (
  <ReactRouterDOMRouterProvider
    router={createBrowserRouter(createRoutesFromElements(children))}
    {...rest}
  />
)
Router.displayName = COMPONENTS.NAMES.ROUTER

export { Router }
