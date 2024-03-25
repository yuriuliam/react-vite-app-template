import React from 'react'

import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons'

import { useToastItem } from '@/data/toast/hooks/useToastItem'

import * as Styled from './styles'

type ToastProps = {
  message: App.Domain.Toast.ToastMessage
  style: Record<any, any>
}

const toastIcons: Record<App.Domain.Toast.ToastType, JSX.Element> = {
  error: <ExclamationTriangleIcon />,
  info: <InfoCircledIcon />,
  success: <CheckCircledIcon />,
}

const TOAST_CONTAINER_NAME = 'Data.Toast.ToastItem'

const ToastItem: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToastMessage } = useToastItem(TOAST_CONTAINER_NAME, message)

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
