import { Heading } from '@radix-ui/themes'

import { RouteLink } from '@/infra/router/components/RouteLink'

import { useConst } from '@/shared/hooks/useConst'

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
