import { Portal } from '@/infra/react/components/Portal'
import { withProps } from '@/infra/react/hocs/withProps'

const HEAD_PORTAL_NAME = 'Data.React.HeadPortal'

/**
 * A wrapper component which portals their children to page's
 * head element.
 */
const HeadPortal = withProps(Portal, { element: document.head })
HeadPortal.displayName = HEAD_PORTAL_NAME

export { HeadPortal }
