import { Portal } from '../Portal/index'

type AppBodyProps = {
  id: string
}

const BODY_NAME = 'Shared.Components.BodyPortal'

/**
 * A wrapper component which portals their children to page's
 * body element.
 */
const Body: React.PFC<AppBodyProps> = ({ children, id }) => (
  <Portal element={document.body} id={id}>
    {children}
  </Portal>
)
Body.displayName = BODY_NAME

export { Body }
