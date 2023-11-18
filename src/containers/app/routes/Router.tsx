import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider as ReactRouterDOMRouterProvider,
} from 'react-router-dom'

type RouterProps = Omit<
  React.ComponentProps<typeof ReactRouterDOMRouterProvider>,
  'router'
>

const ROUTER_NAME = 'App.Routes.Router'

const Router: React.PFC<RouterProps> = ({ children, ...rest }) => (
  <ReactRouterDOMRouterProvider
    router={createBrowserRouter(createRoutesFromElements(children))}
    {...rest}
  />
)
Router.displayName = ROUTER_NAME

export { Router }
