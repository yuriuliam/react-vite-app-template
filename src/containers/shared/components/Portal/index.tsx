import ReactDOM from 'react-dom'

type AppBodyProps = {
  id: string
  element: Element | DocumentFragment
}

const PORTAL_NAME = 'Shared.Components.Portal'

const Portal: React.PFC<AppBodyProps> = ({ children, element, id }) => (
  <>{ReactDOM.createPortal(children, element, id)}</>
)
Portal.displayName = PORTAL_NAME

export { Portal }
