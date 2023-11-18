import { createGlobalStyle } from 'styled-components'

const GLOBAL_STYLES_NAME = 'App.Styles.Global'

const GlobalStyles = createGlobalStyle`
  :root {
    --app-font-family: 'Poppins', sans-serif;
  }

  .radix-themes {
    --default-font-family: var(--app-font-family);
  }
`
GlobalStyles.displayName = GLOBAL_STYLES_NAME

export { GlobalStyles }
