import { Link as ReactRouterDOMLink } from 'react-router-dom'

import { Link } from '../Link'

type AppRouteLinkProps = React.ComponentProps<typeof ReactRouterDOMLink>

const RouteLink: React.FC<AppRouteLinkProps> = props => (
  <Link asChild>
    <ReactRouterDOMLink {...props} />
  </Link>
)

export { RouteLink }
