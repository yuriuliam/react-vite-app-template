import { Theme } from '@radix-ui/themes'

import { withProps } from '@/infra/react/hocs/withProps'

const THEME_CONTEXT_PROVIDER_NAME = 'Infra.Theme.ContextProvider'

const ThemeContextProvider = withProps(Theme, {
  accentColor: 'amber',
  grayColor: 'slate',
})
ThemeContextProvider.displayName = THEME_CONTEXT_PROVIDER_NAME

export { ThemeContextProvider }
