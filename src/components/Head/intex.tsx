import { Portal } from '../Portal/index'

import { COMPONENTS } from '@/utils/constants'

type AppHeadProps = {
  id: string
}

/**
 * A wrapper component which portals their children to page's
 * head element.
 */
const Head: React.PFC<AppHeadProps> = ({ children, id }) => (
  <Portal element={document.head} id={id}>
    {children}
  </Portal>
)
Head.displayName = COMPONENTS.NAMES.HEAD

export { Head }
