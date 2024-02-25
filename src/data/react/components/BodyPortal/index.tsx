import { Portal } from '@/infra/react/components/Portal'
import { withProps } from '@/infra/react/hocs/withProps'

const BODY_PORTAL_NAME = 'Data.React.BodyPortal'

/**
 * A wrapper component which portals their children to page's
 * body element.
 */
const BodyPortal = withProps(Portal, { element: document.body })
BodyPortal.displayName = BODY_PORTAL_NAME

export { BodyPortal }
