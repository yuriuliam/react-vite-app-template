import { Heading } from '@radix-ui/themes'

import { RouteLink } from '@/containers/shared/components/RouteLink'
import { useConst } from '@/containers/shared/hooks/useConst'

const HEADER_LOGO_NAME = 'App.Components.Header.Logo'

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
