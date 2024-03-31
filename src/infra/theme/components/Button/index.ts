import { Button as RadixButton } from '@radix-ui/themes'

import { withProps } from '@/shared/hocs/withProps'

const BUTTON_NAME = 'Infra.Theme.Components.Button'

/**
 * A button for app's purposes.
 */
const Button = withProps(RadixButton, {})
Button.displayName = BUTTON_NAME

export { Button }
