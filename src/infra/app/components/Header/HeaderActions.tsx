import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Box, Flex } from '@radix-ui/themes'

import { RouteLink } from '@/containers/shared/components/RouteLink'

const HEADER_ACTIONS = 'Infra.App.Header.Actions'

const HeaderActions: React.FC = () => {
  return (
    <Flex gap="4" asChild>
      <Box>
        <RouteLink to="/">
          <GitHubLogoIcon />
        </RouteLink>

        <RouteLink to="/">
          <LinkedInLogoIcon />
        </RouteLink>
      </Box>
    </Flex>
  )
}
HeaderActions.displayName = HEADER_ACTIONS

export { HeaderActions }
