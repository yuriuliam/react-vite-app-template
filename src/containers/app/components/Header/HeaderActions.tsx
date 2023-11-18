import { Box, Flex } from '@radix-ui/themes'

import { Icon } from '@/containers/shared/components/Icon'
import { RouteLink } from '@/containers/shared/components/RouteLink'

const HEADER_ACTIONS = 'App.Components.Header.Actions'

const HeaderActions: React.FC = () => {
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
HeaderActions.displayName = HEADER_ACTIONS

export { HeaderActions }
