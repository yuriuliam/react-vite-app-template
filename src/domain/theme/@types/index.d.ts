import { type ExecutionProps } from 'styled-components'

declare global {
  declare namespace App.Domain.Theme {
    type IsDarkMode = boolean
    type ThemeTokens = Record<string, string>

    type CreateGlobalStyleFn = (
      template: TemplateStringsArray,
    ) => [
      GlobalStyle: globalThis.React.NamedExoticComponent<
        ExecutionProps & object
      >,
    ]

    type ThemedHOC = <TProps extends Record<any, any>>(
      Component: globalThis.React.FC<TProps>,
    ) => globalThis.React.FC<TProps>
  }
}

export = global
