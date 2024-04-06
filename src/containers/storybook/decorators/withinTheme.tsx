import { Container, Flex } from '@radix-ui/themes'

import { ThemeProvider } from '@/infra/theme/contexts/theme'
import { ThemeConfigProvider } from '@/infra/theme/contexts/themeConfig'
import { GlobalStyles } from '@/infra/theme/styles/global'

/**
 * Injects theme, theme config and global styles into a component.
 */
const withinTheme: App.Storybook.StorybookDecorator = Story => {
  return (
    <ThemeProvider>
      <ThemeConfigProvider>
        <GlobalStyles />

        <Flex p="9" align="center" justify="center" asChild>
          <Container width="800px">
            <Story />
          </Container>
        </Flex>
      </ThemeConfigProvider>
    </ThemeProvider>
  )
}

export { withinTheme }
