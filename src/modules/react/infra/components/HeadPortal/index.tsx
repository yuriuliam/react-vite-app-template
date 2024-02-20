import { Portal } from '../Portal/index'

const HEAD_PORTAL_NAME = 'Modules.React.Components.HeadPortal'

/**
 * A wrapper component which portals their children to page's
 * head element.
 */
const HeadPortal: React.PFC = ({ children }) => (
  <Portal element={document.head}>{children}</Portal>
)
HeadPortal.displayName = HEAD_PORTAL_NAME

export { HeadPortal }
