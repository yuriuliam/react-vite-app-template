import { HeaderActions } from './HeaderActions'
import { HeaderLogo } from './HeaderLogo'
import { HeaderRoot } from './HeaderRoot'

type AppHeader = React.FC & {
  Logo: typeof HeaderLogo
  Actions: typeof HeaderActions
  Root: typeof HeaderRoot
}

const HEADER_NAME = 'App.Components.Header'

/**
 * Main's Header component.
 */
const Header: AppHeader = () => {
  return (
    <HeaderRoot>
      <HeaderLogo />

      <HeaderActions />
    </HeaderRoot>
  )
}
Header.displayName = HEADER_NAME
Header.Logo = HeaderLogo
Header.Actions = HeaderActions
Header.Root = HeaderRoot

export { Header }
