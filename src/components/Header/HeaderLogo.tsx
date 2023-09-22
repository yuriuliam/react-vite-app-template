import { Heading } from '@radix-ui/themes'

import { RouteLink } from '../RouteLink'

import { useConst } from '@/hooks/useConst'

import { APP, COMPONENTS } from '@/utils/constants'

const HeaderLogo: React.FC = () => {
  const displayTitle = useConst(APP.DISPLAY_NAME)

  return (
    <Heading asChild>
      <RouteLink to="/">{displayTitle}</RouteLink>
    </Heading>
  )
}
HeaderLogo.displayName = COMPONENTS.NAMES.HEADER_LOGO

export { HeaderLogo }
