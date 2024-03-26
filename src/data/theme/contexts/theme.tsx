import { Theme } from '@radix-ui/themes'

import { withProps } from '@/shared/hocs/withProps'

import { themeConfig } from '../config/theme'

const THEME_CONTEXT_PROVIDER_NAME = 'Infra.Theme.ContextProvider'

const ThemeContextProvider = withProps(Theme, themeConfig)
ThemeContextProvider.displayName = THEME_CONTEXT_PROVIDER_NAME

export { ThemeContextProvider }
