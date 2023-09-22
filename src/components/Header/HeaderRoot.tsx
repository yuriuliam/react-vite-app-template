import React from 'react'

import { Container, Flex } from '@radix-ui/themes'

import { COMPONENTS } from '@/utils/constants'

type AppHeaderRootProps = React.PropsWithChildren

const HeaderRoot = React.forwardRef<HTMLDivElement, AppHeaderRootProps>(
  ({ children }, ref) => {
    return (
      <Container ref={ref}>
        <Flex justify="between">{children}</Flex>
      </Container>
    )
  },
)
HeaderRoot.displayName = COMPONENTS.NAMES.HEADER_ROOT

export { HeaderRoot }
