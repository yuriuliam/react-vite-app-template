import React from 'react'

import * as RadixIcons from '@radix-ui/react-icons'
import { Box } from '@radix-ui/themes'

import { COMPONENTS } from '@/utils/constants'

type BoxProps = React.ComponentProps<typeof Box>

type IconComponent = (typeof RadixIcons)[keyof typeof RadixIcons]
type IconProps = React.ComponentPropsWithoutRef<IconComponent>

type AppIconProps = {
  type: keyof typeof RadixIcons
  size?: BoxProps['width']
} & IconProps

/**
 * App's Icon component.
 *
 * It requires the name of the icon in order to render it properly.
 */
const Icon = React.forwardRef<SVGSVGElement, AppIconProps>(
  ({ type, size = '4', ...props }, ref) => {
    if (!(type in RadixIcons)) throw Error(`type "${type}" does not exist`)

    const IconComp = RadixIcons[type]

    return (
      <Box width={size} height={size} asChild>
        <IconComp ref={ref} {...props} />
      </Box>
    )
  },
)
Icon.displayName = COMPONENTS.NAMES.ICON

export { Icon }
