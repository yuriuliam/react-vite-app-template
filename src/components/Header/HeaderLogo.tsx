import { Heading } from '@radix-ui/themes'

import { RouteLink } from '../RouteLink'

import { useConst } from '../../hooks/useConst'

import { APP } from '../../utils/constants'

const HeaderLogo: React.FC = () => {
  const displayTitle = useConst(APP.DISPLAY_NAME)

  return (
    <Heading asChild>
      <RouteLink to="/">{displayTitle}</RouteLink>
    </Heading>
  )
}
HeaderLogo.displayName = 'App.Header.Logo'

export { HeaderLogo }
