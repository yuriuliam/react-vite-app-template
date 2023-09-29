import { css } from '@linaria/core'

const global = css`
  :root {
    --app-font-family: 'Poppins', sans-serif;
  }

  .radix-themes {
    --default-font-family: var(--app-font-family);
  }
`

export { global }
