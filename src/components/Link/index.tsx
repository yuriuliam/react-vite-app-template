import { Flex, Link as RadixUILink } from '@radix-ui/themes'

type AppLinkProps = React.ComponentProps<typeof RadixUILink>

const Link: React.FC<AppLinkProps> = props => (
  <Flex asChild align="center" justify="center">
    <RadixUILink {...props} />
  </Flex>
)
Link.displayName = 'App.Link'

export { Link }
