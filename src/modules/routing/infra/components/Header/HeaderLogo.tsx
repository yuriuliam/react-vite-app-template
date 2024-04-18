import { Heading } from '@radix-ui/themes'

import { useConst } from '@/shared/hooks/useConst'

import { RouteLink } from '../RouteLink'

const HEADER_LOGO_NAME = 'Infra.App.Header.Logo'

const HeaderLogo: React.FC = () => {
  const displayTitle = useConst('My App')

  return (
    <Heading asChild>
      <RouteLink to="/">{displayTitle}</RouteLink>
    </Heading>
  )
}
HeaderLogo.displayName = HEADER_LOGO_NAME

export { HeaderLogo }
