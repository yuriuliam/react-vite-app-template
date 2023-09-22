import ReactDOM from 'react-dom'

import { COMPONENTS } from '@/utils/constants'

type AppBodyProps = {
  id: string
  element: Element | DocumentFragment
}

const Portal: React.PFC<AppBodyProps> = ({ children, element, id }) => (
  <>{ReactDOM.createPortal(children, element, id)}</>
)
Portal.displayName = COMPONENTS.NAMES.PORTAL

export { Portal }
