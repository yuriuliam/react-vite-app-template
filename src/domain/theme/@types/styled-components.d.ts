/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends App.Domain.Theme.ThemeTokens {}
}
