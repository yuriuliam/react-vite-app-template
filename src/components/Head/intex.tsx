import { Portal } from '../Portal/index'

type AppHeadProps = {
  id: string
}

const Head: React.PFC<AppHeadProps> = ({ children, id }) => (
  <Portal element={document.head} id={id}>
    {children}
  </Portal>
)
Head.displayName = 'App.Head'

export { Head }
