import { Portal } from '../Portal/index'

type AppHeadProps = {
  id: string
}

const HEAD_NAME = 'Shared.Components.HeadPortal'

/**
 * A wrapper component which portals their children to page's
 * head element.
 */
const Head: React.PFC<AppHeadProps> = ({ children, id }) => (
  <Portal element={document.head} id={id}>
    {children}
  </Portal>
)
Head.displayName = HEAD_NAME

export { Head }
