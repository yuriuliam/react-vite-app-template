import { Portal } from '../Portal/index'

const HEAD_NAME = 'Shared.Components.HeadPortal'

/**
 * A wrapper component which portals their children to page's
 * head element.
 */
const Head: React.PFC = ({ children }) => (
  <Portal element={document.head}>{children}</Portal>
)
Head.displayName = HEAD_NAME

export { Head }