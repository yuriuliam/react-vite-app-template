import ReactDOM from 'react-dom'

type AppBodyProps = {
  id: string
  element: Element | DocumentFragment
}

const Portal: React.PFC<AppBodyProps> = ({ children, element, id }) => (
  <>{ReactDOM.createPortal(children, element, id)}</>
)
Portal.displayName = 'App.Portal'

export { Portal }
