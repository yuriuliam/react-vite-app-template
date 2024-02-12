import ReactDOM from 'react-dom'

type AppBodyProps = {
  element: Element | DocumentFragment
}

const PORTAL_NAME = 'Shared.Components.Portal'

const Portal: React.PFC<AppBodyProps> = ({ children, element }) => (
  <>{ReactDOM.createPortal(children, element)}</>
)
Portal.displayName = PORTAL_NAME

export { Portal }
