import { Theme } from '@radix-ui/themes'

import { withProps } from '@/shared/hocs/withProps'

import { themeConfig } from '../config/themeConfig'

import '@radix-ui/themes/styles.css'

const THEME_CONTEXT_PROVIDER_NAME = 'Infra.Theme.ConfigContextProvider'

const ThemeConfigContextProvider = withProps(Theme, themeConfig)
ThemeConfigContextProvider.displayName = THEME_CONTEXT_PROVIDER_NAME

export { ThemeConfigContextProvider }
