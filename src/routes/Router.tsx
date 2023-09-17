import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider as ReactRouterDOMRouterProvider,
} from 'react-router-dom'

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

export { Router }
