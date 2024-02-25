import ReactDOM from 'react-dom'

type AppBodyProps = {
  element: Element | DocumentFragment
}

const PORTAL_NAME = 'Infra.React.Portal'

const Portal: React.PFC<AppBodyProps> = ({ children, element }) => (
  <>{ReactDOM.createPortal(children, element)}</>
)
Portal.displayName = PORTAL_NAME

export { Portal }
