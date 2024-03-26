import { withProps } from '../hocs/withProps'
import { Portal } from './Portal'

const BODY_PORTAL_NAME = 'Data.React.BodyPortal'

/**
 * A wrapper component which portals their children to page's
 * body element.
 */
const BodyPortal = withProps(Portal, { element: document.body })
BodyPortal.displayName = BODY_PORTAL_NAME

export { BodyPortal }
