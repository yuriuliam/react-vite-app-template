import { Link as ReactRouterDOMLink } from 'react-router-dom'

import { assertRouteIsParsed } from '@/data/router/subjects/assertRouteIsParsed'

import { Link } from '@/infra/theme/components/Link'

type AppRouteLinkProps = React.ComponentProps<typeof ReactRouterDOMLink>

const ROUTE_LINK_NAME = 'Infra.Router.Components.RouteLink'

const RouteLink: React.FC<AppRouteLinkProps> = props => {
  assertRouteIsParsed(
    props.to,
    `[${ROUTE_LINK_NAME}]: Route is not properly parsed`,
  )

  return (
    <Link asChild>
      <ReactRouterDOMLink {...props} />
    </Link>
  )
}
RouteLink.displayName = ROUTE_LINK_NAME

export { RouteLink }
