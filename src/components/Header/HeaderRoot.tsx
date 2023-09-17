import React from 'react'

import { Container, Flex } from '@radix-ui/themes'

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
HeaderRoot.displayName = 'App.Header.Root'

export { HeaderRoot }
