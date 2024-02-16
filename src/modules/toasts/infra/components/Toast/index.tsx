import React from 'react'

import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons'

import { TOAST_TTL_IN_MS } from '@/config/toasts'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

import { useToast } from '../../contexts/toast/context'
import * as Styled from './styles'

type ToastProps = {
  message: App.Modules.Toast.AppToastMessage
}

const toastIcons: Record<App.Modules.Toast.AppToastType, JSX.Element> = {
  error: <ExclamationTriangleIcon />,
  info: <InfoCircledIcon />,
  success: <CheckCircledIcon />,
}

const TOAST_CONTAINER_NAME = 'Modules.Toast.Components.Toast'

const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast(TOAST_CONTAINER_NAME)

  const removeToastMessage = useCallbackRef(() => {
    removeToast(message.id)
  })

  React.useEffect(() => {
    const timer = setTimeout(() => {
      removeToastMessage()
    }, TOAST_TTL_IN_MS)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToastMessage])

  return (
    <Styled.Container
      type={message.type}
      hasDescription={!!message.description}
    >
      {toastIcons[message.type ?? 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={removeToastMessage}>
        <CrossCircledIcon />
      </button>
    </Styled.Container>
  )
}
Toast.displayName = TOAST_CONTAINER_NAME

export { Toast }
