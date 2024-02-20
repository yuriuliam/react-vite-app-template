import { BodyPortal } from '@/modules/react/infra/components/BodyPortal'

import { Toast } from '../Toast'
import * as Styled from './styles'

type ToastContainerProps = { messages: App.Modules.Toast.AppToastMessage[] }

const TOAST_CONTAINER_NAME = 'Modules.Toast.Components.ToastContainer'

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <BodyPortal>
    <Styled.Root>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Styled.Root>
  </BodyPortal>
)
ToastContainer.displayName = TOAST_CONTAINER_NAME

export { ToastContainer }
