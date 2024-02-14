import { Box, Flex } from '@radix-ui/themes'

import { RouteLink } from '@/containers/shared/components/RouteLink'

import { Icon } from '@/infra/design/components/Icon'

const HEADER_ACTIONS = 'Containers.App.Components.Header.Actions'

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
