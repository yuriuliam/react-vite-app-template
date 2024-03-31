import { type useThemeContext } from '@radix-ui/themes'

const themeConfig = {
  appearance: 'dark',
  accentColor: 'amber',
  grayColor: 'slate',
} satisfies Partial<ReturnType<typeof useThemeContext>>

export { themeConfig }
