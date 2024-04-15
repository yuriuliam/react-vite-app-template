import { Link as ReactRouterDOMLink } from 'react-router-dom'

import { Link } from '@/infra/theme/components/Link'

import { assertRouteIsParsed } from '@/modules/routing/data/subjects/assertRouteIsParsed'

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
