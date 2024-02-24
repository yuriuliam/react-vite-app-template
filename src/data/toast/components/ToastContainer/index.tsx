import { BodyPortal } from '@/data/react/components/BodyPortal'

import { ToastItem } from '../ToastItem'
import * as Styled from './styles'

type ToastContainerProps = { messages: App.Domain.Toast.AppToastMessage[] }

const TOAST_CONTAINER_NAME = 'Modules.Toast.Components.ToastContainer'

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <BodyPortal>
    <Styled.Root>
      {messages.map(message => (
        <ToastItem key={message.id} message={message} />
      ))}
    </Styled.Root>
  </BodyPortal>
)
ToastContainer.displayName = TOAST_CONTAINER_NAME

export { ToastContainer }
