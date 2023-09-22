import { Link as ReactRouterDOMLink } from 'react-router-dom'

import { Link } from '../Link'

import { COMPONENTS } from '@/utils/constants'

type AppRouteLinkProps = React.ComponentProps<typeof ReactRouterDOMLink>

const RouteLink: React.FC<AppRouteLinkProps> = props => (
  <Link asChild>
    <ReactRouterDOMLink {...props} />
  </Link>
)
RouteLink.displayName = COMPONENTS.NAMES.ROUTE_LINK

export { RouteLink }
