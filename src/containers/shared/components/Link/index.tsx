import { Flex, Link as RadixUILink } from '@radix-ui/themes'

type AppLinkProps = React.ComponentProps<typeof RadixUILink>

const LINK_NAME = 'Shared.Components.Link'

const Link: React.FC<AppLinkProps> = props => (
  <Flex asChild align="center" justify="center">
    <RadixUILink {...props} />
  </Flex>
)
Link.displayName = LINK_NAME

export { Link }
