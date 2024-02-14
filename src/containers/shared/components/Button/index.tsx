import React from 'react'

import { Button as RadixButton } from '@radix-ui/themes'

const BUTTON_NAME = 'Containers.Shared.Components.Button'

/**
 * A button for app's purposes.
 */
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
Button.displayName = BUTTON_NAME

export { Button }
