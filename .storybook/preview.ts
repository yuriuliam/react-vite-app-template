import { themes } from '@storybook/theming';

import { type Preview } from '@storybook/react'

import { withinTheme } from '../src/containers/storybook/decorators/withinTheme'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@radix-ui/themes/styles.css'

const preview: Preview = {
  decorators: withinTheme,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    },
  },
}

export default preview
