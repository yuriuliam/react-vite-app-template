import { HeaderLogo } from './HeaderLogo'
import { HeaderRightActions } from './HeaderRightActions'
import { HeaderRoot } from './HeaderRoot'

type AppHeader = React.FC & {
  Logo: typeof HeaderLogo
  RightActions: typeof HeaderRightActions
  Root: typeof HeaderRoot
}

const Header: AppHeader = () => {
  return (
    <HeaderRoot>
      <HeaderLogo />

      <HeaderRightActions />
    </HeaderRoot>
  )
}
Header.displayName = 'App.Header'
Header.Logo = HeaderLogo
Header.RightActions = HeaderRightActions
Header.Root = HeaderRoot

export { Header }
