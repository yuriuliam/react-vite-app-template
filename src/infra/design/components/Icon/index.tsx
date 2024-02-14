import React from 'react'

import { Box } from '@radix-ui/themes'

import type * as RadixIconsTypes from '@radix-ui/react-icons'

type BoxProps = React.ComponentProps<typeof Box>

type IconComponent = (typeof RadixIconsTypes)[keyof typeof RadixIconsTypes]
type IconProps = React.ComponentPropsWithoutRef<IconComponent>

type AppIconProps = {
  type: keyof typeof RadixIconsTypes
  size?: BoxProps['width']
} & IconProps

const ICON_NAME = 'Infra.Design.Components.Icon'

/**
 * App's Icon component.
 *
 * It requires the name of the icon in order to render it properly.
 */
const Icon = React.forwardRef<SVGSVGElement, AppIconProps>(
  ({ type, size = '4', ...props }, ref) => {
    const IconComp = React.lazy(async () => {
      const RadixIcons = await import('@radix-ui/react-icons')

      if (!(type in RadixIcons)) throw Error(`type "${type}" does not exist`)

      return { default: RadixIcons[type] }
    })

    return (
      <React.Suspense>
        <Box width={size} height={size} asChild>
          <IconComp ref={ref} {...props} />
        </Box>
      </React.Suspense>
    )
  },
)
Icon.displayName = ICON_NAME

export { Icon }
