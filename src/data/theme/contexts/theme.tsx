import { ThemeProvider } from 'styled-components'

import { withProps } from '@/shared/hocs/withProps'

import { themeTokens } from '../config/theme'

const THEME_CONTEXT_PROVIDER_NAME = 'Infra.Theme.ContextProvider'

const ThemeContextProvider = withProps(ThemeProvider, { theme: themeTokens })
ThemeContextProvider.displayName = THEME_CONTEXT_PROVIDER_NAME

export { ThemeContextProvider }
