import { createGlobalStyle } from '@/data/theme/subjects/createGlobalStyle'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'

const [GlobalStyles] = createGlobalStyle`
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
