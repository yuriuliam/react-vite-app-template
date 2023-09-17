import React from 'react'

import { Button as RadixButton } from '@radix-ui/themes'

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof RadixButton>
>(({ children, ...props }, ref) => {
  return (
    <RadixButton ref={ref} {...props}>
      {children}
    </RadixButton>
  )
})
Button.displayName = 'App.Button'

export { Button }
