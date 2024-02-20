import { Portal } from '../Portal/index'

const BODY_PORTAL_NAME = 'Modules.React.Components.BodyPortal'

/**
 * A wrapper component which portals their children to page's
 * body element.
 */
const BodyPortal: React.PFC = ({ children }) => (
  <Portal element={document.body}>{children}</Portal>
)
BodyPortal.displayName = BODY_PORTAL_NAME

export { BodyPortal }
