import { HeaderActions } from './HeaderActions'
import { HeaderLogo } from './HeaderLogo'
import { HeaderRoot } from './HeaderRoot'

type ComposedHeaderComponents = {
  Logo: typeof HeaderLogo
  Actions: typeof HeaderActions
  Root: typeof HeaderRoot
}

type HeaderCFC = React.CFC<ComposedHeaderComponents>

const HEADER_NAME = 'Infra.App.Header'

/**
 * Main's Header component.
 */
const Header: HeaderCFC = () => {
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
