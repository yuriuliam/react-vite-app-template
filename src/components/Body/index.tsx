import { Portal } from '../Portal/index'

import { COMPONENTS } from '@/utils/constants'

type AppBodyProps = {
  id: string
}

/**
 * A wrapper component which portals their children to page's
 * body element.
 */
const Body: React.PFC<AppBodyProps> = ({ children, id }) => (
  <Portal element={document.body} id={id}>
    {children}
  </Portal>
)
Body.displayName = COMPONENTS.NAMES.PORTALS.BODY

export { Body }
