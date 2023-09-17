import { useMemo } from 'react'

import * as RadixIcons from '@radix-ui/react-icons'
import { Box } from '@radix-ui/themes'

type BoxProps = React.ComponentProps<typeof Box>

type AppIconProps = {
  type: keyof typeof RadixIcons
  size?: BoxProps['width']
}

const Icon: React.FC<AppIconProps> = ({ type, size = '4' }) => {
  if (!(type in RadixIcons)) throw Error(`type "${type}" does not exist`)

  const IconComp = useMemo(() => RadixIcons[type], [type])

  return (
    <Box width={size} height={size} asChild>
      <IconComp />
    </Box>
  )
}
Icon.displayName = 'App.Icon'

export { Icon }
