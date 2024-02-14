import { Portal } from '../Portal/index'

const BODY_NAME = 'Infra.React.Components.Body'

/**
 * A wrapper component which portals their children to page's
 * body element.
 */
const Body: React.PFC = ({ children }) => (
  <Portal element={document.body}>{children}</Portal>
)
Body.displayName = BODY_NAME

export { Body }
