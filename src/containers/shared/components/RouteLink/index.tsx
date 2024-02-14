import { Link as ReactRouterDOMLink } from 'react-router-dom'

import { Link } from '../Link'

type AppRouteLinkProps = React.ComponentProps<typeof ReactRouterDOMLink>

const ROUTE_LINK_NAME = 'Containers.Shared.Components.RouteLink'

const RouteLink: React.FC<AppRouteLinkProps> = props => (
  <Link asChild>
    <ReactRouterDOMLink {...props} />
  </Link>
)
RouteLink.displayName = ROUTE_LINK_NAME

export { RouteLink }
