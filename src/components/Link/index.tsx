import { Flex, Link as RadixUILink } from '@radix-ui/themes'

import { COMPONENTS } from '@/utils/constants'

type AppLinkProps = React.ComponentProps<typeof RadixUILink>

const Link: React.FC<AppLinkProps> = props => (
  <Flex asChild align="center" justify="center">
    <RadixUILink {...props} />
  </Flex>
)
Link.displayName = COMPONENTS.NAMES.LINK

export { Link }
