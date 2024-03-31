import { getComponentDisplayName } from '@/shared/utils/react'

import { ThemeProvider } from '../contexts/theme'
import { ThemeConfigProvider } from '../contexts/themeConfig'
import { GlobalStyles } from '../styles/global'

/**
 * Injects theme, theme config and global styles into a component.
 *
 * Useful for storybook workshop.
 */
const themed: App.Domain.Theme.ThemedHOC = Component => {
  const componentName = getComponentDisplayName(Component)

  const ThemedComponent: React.FC<
    React.ComponentProps<typeof Component>
  > = props => {
    return (
      <ThemeProvider>
        <ThemeConfigProvider>
          <GlobalStyles />

          <Component {...props} />
        </ThemeConfigProvider>
      </ThemeProvider>
    )
  }
  ThemedComponent.displayName = `themed(${componentName})`

  return ThemedComponent
}

export { themed }
