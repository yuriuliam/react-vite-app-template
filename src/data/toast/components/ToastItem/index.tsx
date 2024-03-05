import React from 'react'

import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'
import { TOAST_TTL_IN_MS } from '@/infra/toast/config/toast'
import { useToast } from '@/infra/toast/contexts/toast'

import * as Styled from './styles'

type ToastProps = {
  message: App.Domain.Toast.AppToastMessage
  style: Record<any, any>
}

const toastIcons: Record<App.Domain.Toast.AppToastType, JSX.Element> = {
  error: <ExclamationTriangleIcon />,
  info: <InfoCircledIcon />,
  success: <CheckCircledIcon />,
}

const TOAST_CONTAINER_NAME = 'Data.Toast.ToastItem'

const ToastItem: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast(TOAST_CONTAINER_NAME)

  const removeToastMessage = useCallbackRef(() => {
    removeToast(message.id)
  })

  React.useEffect(() => {
    const timer = setTimeout(removeToastMessage, TOAST_TTL_IN_MS)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToastMessage])

  return (
    <Styled.Root
      $type={message.type}
      $hasDescription={!!message.description}
      style={style}
    >
      {toastIcons[message.type ?? 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={removeToastMessage}>
        <CrossCircledIcon />
      </button>
    </Styled.Root>
  )
}
ToastItem.displayName = TOAST_CONTAINER_NAME

export { ToastItem }
