import { Box, Flex } from '@radix-ui/themes'

import { Icon } from '../Icon'
import { RouteLink } from '../RouteLink'

const HeaderRightActions: React.FC = () => {
  return (
    <Flex gap="4" asChild>
      <Box>
        <RouteLink to="/">
          <Icon type="GitHubLogoIcon" />
        </RouteLink>

        <RouteLink to="/">
          <Icon type="LinkedInLogoIcon" />
        </RouteLink>
      </Box>
    </Flex>
  )
}
HeaderRightActions.displayName = 'App.Header.RightActions'

export { HeaderRightActions }
