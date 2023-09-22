import React from 'react'

import { Button as RadixButton } from '@radix-ui/themes'

import { COMPONENTS } from '@/utils/constants'

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
Button.displayName = COMPONENTS.NAMES.BUTTON

export { Button }
