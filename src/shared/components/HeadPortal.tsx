import { withProps } from '../hocs/withProps'
import { Portal } from './Portal'

const HEAD_PORTAL_NAME = 'Data.React.HeadPortal'

/**
 * A wrapper component which portals their children to page's
 * head element.
 */
const HeadPortal = withProps(Portal, { element: document.head })
HeadPortal.displayName = HEAD_PORTAL_NAME

export { HeadPortal }
