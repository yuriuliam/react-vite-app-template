import { HeaderLogo } from './HeaderLogo'
import { HeaderRightActions } from './HeaderRightActions'
import { HeaderRoot } from './HeaderRoot'

import { COMPONENTS } from '@/utils/constants'

type AppHeader = React.FC & {
  Logo: typeof HeaderLogo
  RightActions: typeof HeaderRightActions
  Root: typeof HeaderRoot
}

/**
 * Main's Header component.
 */
const Header: AppHeader = () => {
  return (
    <HeaderRoot>
      <HeaderLogo />

      <HeaderRightActions />
    </HeaderRoot>
  )
}
Header.displayName = COMPONENTS.NAMES.HEADER
Header.Logo = HeaderLogo
Header.RightActions = HeaderRightActions
Header.Root = HeaderRoot

export { Header }
