import { type ExecutionProps } from 'styled-components'

declare global {
  declare namespace App.Domain.Theme {
    type GlobalStyleFC = globalThis.React.NamedExoticComponent<
      ExecutionProps & object
    >

    type IsDarkMode = boolean
    type ThemeTokens = Record<string, string>

    type CreateGlobalStyleFn = (template: TemplateStringsArray) => GlobalStyleFC
  }
}

export = global
