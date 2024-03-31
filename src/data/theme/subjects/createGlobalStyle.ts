import { createGlobalStyle as createSCGlobalStyle } from 'styled-components'

const createGlobalStyle: App.Domain.Theme.CreateGlobalStyleFn = template => {
  const GlobalStyle = createSCGlobalStyle(template)
  GlobalStyle.displayName = 'Data.Theme.createGlobalStyle'

  return [GlobalStyle]
}

export { createGlobalStyle }
