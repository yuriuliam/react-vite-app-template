import { GitHubLogoIcon, ArchiveIcon } from '@radix-ui/react-icons'
import { Box, Flex, Link } from '@radix-ui/themes'

const HEADER_ACTIONS = 'Infra.App.Header.Actions'

const HeaderActions: React.FC = () => {
  return (
    <Flex gap="4" asChild>
      <Box>
        <Link
          title="My GitHub Profile"
          target="_blank"
          href="https://github.com/yuriuliam"
        >
          <GitHubLogoIcon />
        </Link>

        <Link
          title="Storybook of this project"
          target="_blank"
          href="https://yuriuliam.github.io/react-vite-app-template/"
        >
          <ArchiveIcon />
        </Link>
      </Box>
    </Flex>
  )
}
HeaderActions.displayName = HEADER_ACTIONS

export { HeaderActions }
