import { Body } from '@/infra/react/components/Body'

import { Toast } from '../Toast'
import * as Styled from './styles'

type ToastContainerProps = { messages: App.Modules.Toast.AppToastMessage[] }

const TOAST_CONTAINER_NAME = 'Modules.Toast.Components.ToastContainer'

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Body>
    <Styled.Root>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Styled.Root>
  </Body>
)
ToastContainer.displayName = TOAST_CONTAINER_NAME

export { ToastContainer }
