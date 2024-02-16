import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --app-font-family: 'Poppins', sans-serif;
  }

  .radix-themes {
    --default-font-family: var(--app-font-family);
  }

  html, body {
    font-family: var(--app-font-family);
  }
`

export { GlobalStyles }
