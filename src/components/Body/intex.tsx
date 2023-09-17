import { Portal } from '../Portal/index'

type AppBodyProps = {
  id: string
}

const Body: React.PFC<AppBodyProps> = ({ children, id }) => (
  <Portal element={document.body} id={id}>
    {children}
  </Portal>
)
Body.displayName = 'App.Body'

export { Body }
